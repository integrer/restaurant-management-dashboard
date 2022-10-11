import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSagaTools } from '@app/store/SagaTools';
import mainReportSaga from '@app/store/saga';
import * as selectors from '@app/store/selectors';
import { CircularProgress } from '@mui/material';
import { DashboardGrid } from '@app/features/dashboard/components/styled';
import { PaymentMethodsChart, SalesPerCategoryChart, SalesPerHourChart, WaitersChart } from '@app/features/dashboard';

export default function Dashboard() {
  const { runSagaExclusive } = useSagaTools();

  useEffect(() => {
    runSagaExclusive(mainReportSaga);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { error, data } = useSelector(selectors.reportQuery);
  const date = useSelector(selectors.reportDate);

  if (error) return <p>Something went wrong...</p>;

  if (!data) return <CircularProgress />;

  return (
    <DashboardGrid>
      <WaitersChart data={data.dailyWaiters} />
      <SalesPerHourChart data={data.hourlySales} date={date} />
      <PaymentMethodsChart data={data.dailyPayments} />
      <SalesPerCategoryChart data={data.dailyCategories} />
    </DashboardGrid>
  );
}
