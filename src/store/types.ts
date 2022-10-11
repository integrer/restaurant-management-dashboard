import { IReportData } from '../services/ReportService';

type ActionOf<TActionMap extends Record<string, Record<PropertyKey, unknown>>> = {
  [K in keyof TActionMap]: TActionMap[K] & { type: K };
}[keyof TActionMap];

export const ReportActionType = {
  SelectDate: 'SELECT_REPORT_DATE',
  Request: 'REQUEST_REPORT',
  Receive: 'RECEIVE_REPORT',
  Failure: 'FAILURE_REPORT',
} as const;

type ActionCreator<TActionType extends AppActionType> = [AppActionMap[TActionType]] extends [Record<string, never>]
  ? () => AppAction<TActionType>
  : (payload: AppActionMap[TActionType]) => AppAction<TActionType>;

type ActionCreatorMap<TActionTypeMap extends Record<string, AppActionType>> = {
  [K in keyof TActionTypeMap]: ActionCreator<TActionTypeMap[K]>;
};

export const reportAction: ActionCreatorMap<typeof ReportActionType> = (
  Object.keys(ReportActionType) as (keyof typeof ReportActionType)[]
).reduce((acc, key) => {
  const type = ReportActionType[key];
  (acc as any)[key] = (payload: any) => ({ ...(payload || null), type });
  return acc;
}, {} as ActionCreatorMap<typeof ReportActionType>);

export type AppActionMap = {
  [ReportActionType.SelectDate]: { date: string };
  [ReportActionType.Request]: Record<string, never>;
  [ReportActionType.Receive]: { data: IReportData };
  [ReportActionType.Failure]: { error: unknown };
};

export type AppActionType = keyof AppActionMap;

export type AppAction<TActionType extends AppActionType = AppActionType> = ActionOf<Pick<AppActionMap, TActionType>>;
