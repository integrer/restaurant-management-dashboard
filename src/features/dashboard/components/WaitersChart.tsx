import React, { useLayoutEffect } from 'react';
import DashboardItemWrap from './DashboardItemWrap';
import { ICountedPaymentData } from '@app/services/ReportService';
import { BarElement, CategoryScale, Chart as ChartJs, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

export interface IWaitersChartProps {
  data: ICountedPaymentData[];
}

const registerComponents = () => {
  ChartJs.register(CategoryScale, LinearScale, BarElement, Tooltip);
};

const color = 'rgba(100, 149, 251, 0.5)';

export default function WaitersChart({ data }: IWaitersChartProps) {
  useLayoutEffect(() => registerComponents(), []);

  const labels = data.map((waiter) => waiter.name);
  const values = data.map((waiter) => waiter.total);

  return (
    <DashboardItemWrap title='Top waiters'>
      <Bar
        options={{
          indexAxis: 'y',
          elements: {
            bar: { borderWidth: 2 },
          },
          responsive: true,
          plugins: {
            legend: { display: false },
          },
        }}
        data={{ labels, datasets: [{ data: values, backgroundColor: color, borderColor: color }] }}
      />
    </DashboardItemWrap>
  );
}
