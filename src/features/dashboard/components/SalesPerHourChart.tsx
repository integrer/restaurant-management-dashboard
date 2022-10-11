import React, { useLayoutEffect } from 'react';
import DashboardItemWrap from './DashboardItemWrap';
import { IHourlySalesData } from '@app/services/ReportService';
import { CategoryScale, Chart as ChartJs, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';

export interface ISalesPerHourChartProps {
  data: IHourlySalesData[];
  date: string;
}

const registerComponents = () => {
  ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
};

const color = '#5C90F6';

export default function SalesPerHourChart({ data, date }: ISalesPerHourChartProps) {
  useLayoutEffect(() => registerComponents(), []);

  const labels = data.map((_v, idx) => idx);
  const values = data.map((payment) => payment.total);

  return (
    <DashboardItemWrap title='Sales per hour'>
      <Line
        options={{
          responsive: true,
          plugins: { legend: { position: 'bottom' } },
        }}
        data={{
          labels,
          datasets: [{ label: date, data: values, borderColor: color, backgroundColor: color }],
        }}
      />
    </DashboardItemWrap>
  );
}
