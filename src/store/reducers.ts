import { IReportData } from '@app/services/ReportService';
import { AppAction } from '@app/store/types';
import { combineReducers } from 'redux';

export interface IReportState {
  loading: boolean;
  error?: unknown;
  date: string;
  data?: IReportData;
}

const defaultReportState: IReportState = {
  loading: false,
  date: '20220128',
};

export function reportReducer(state: IReportState = defaultReportState, action: AppAction): IReportState {
  switch (action.type) {
    case 'REQUEST_REPORT': {
      const { error, data, ...baseState } = state;
      return { ...baseState, loading: true };
    }
    case 'RECEIVE_REPORT': {
      const { data } = action;
      const { error, ...baseState } = state;
      return { ...baseState, loading: false, data };
    }
    case 'FAILURE_REPORT': {
      const { error } = action;
      const { data, ...baseState } = state;
      return { ...baseState, loading: false, error };
    }
    case 'SELECT_REPORT_DATE': {
      const { date } = action;
      return { ...state, date };
    }
    default:
      return state;
  }
}

const reducer = combineReducers({ report: reportReducer });

export type AppState = ReturnType<typeof reducer>;

export default reducer;
