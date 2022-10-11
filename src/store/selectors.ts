import { AppState } from '@app/store/reducers';

export const reportDate = (state: AppState) => state.report.date;

export const reportQuery = ({ report: { error, loading, data } }: AppState) => ({ error, loading, data });
