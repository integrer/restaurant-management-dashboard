import { call, cancel, cancelled, fork, select, take, put, SagaReturnType } from '@redux-saga/core/effects';
import { Task } from 'redux-saga';
import * as selectors from './selectors';
import ReportService from '@app/services/ReportService';
import { reportAction, ReportActionType } from '@app/store/types';

function* invalidateReport() {
  function* doInvalidateReport() {
    const ac = new AbortController();
    try {
      const date: ReturnType<typeof selectors.reportDate> = yield select(selectors.reportDate);
      const data: SagaReturnType<typeof ReportService.getReport> = yield call(ReportService.getReport, date, ac.signal);
      yield put(reportAction.Receive({ data }));
    } catch (error) {
      if ((yield cancelled()) as boolean) {
        ac.abort();
        return;
      }
      yield put(reportAction.Failure({ error }));
    }
  }

  let fetchReportTask: Task<void> = yield fork(doInvalidateReport);
  while (true) {
    yield take(ReportActionType.Request);
    yield cancel(fetchReportTask);
    fetchReportTask = yield fork(doInvalidateReport);
  }
}

function* handleReportDateSelect() {
  while (true) {
    const prevDate: ReturnType<typeof selectors.reportDate> = yield select(selectors.reportDate);
    yield take(ReportActionType.SelectDate);
    const curDate: ReturnType<typeof selectors.reportDate> = yield select(selectors.reportDate);
    if (prevDate !== curDate) yield put(reportAction.Request());
  }
}

export default function* mainReportSaga() {
  yield fork(invalidateReport);
  yield fork(handleReportDateSelect);
}
