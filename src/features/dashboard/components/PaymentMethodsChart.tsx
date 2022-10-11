import React, { useLayoutEffect } from 'react';
import DashboardItemWrap from './DashboardItemWrap';
import { IPaymentData } from '@app/services/ReportService';
import { ArcElement, Chart as ChartJs, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styled from '@emotion/styled';

export interface IPaymentMethodsChartProps {
  data: IPaymentData[];
}

const registerComponents = () => {
  ChartJs.register(ArcElement, Tooltip, Legend);
};

const palette = ['#6495FB', '#62DAAC'];

const ChartWrapper = styled.div`
  height: 260px;
`;

export default function PaymentMethodsChart({ data }: IPaymentMethodsChartProps) {
  useLayoutEffect(() => registerComponents(), []);

  const fixedData = data.slice(0, palette.length);
  const labels = data.map((paymentMethod) => paymentMethod.name);
  const values = data.map((paymentMethod) => paymentMethod.total);

  const fixedPalette = palette.slice(0, fixedData.length);

  return (
    <DashboardItemWrap title='Payments'>
      <ChartWrapper>
        <Pie
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } },
          }}
          data={{
            labels,
            datasets: [{ data: values, backgroundColor: fixedPalette, borderColor: fixedPalette, borderWidth: 1 }],
          }}
        />
      </ChartWrapper>
    </DashboardItemWrap>
  );
}
