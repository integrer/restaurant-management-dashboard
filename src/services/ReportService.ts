import { delay } from '@app/utils/async';

export interface IPaymentData {
  name: string;
  total: number;
}

export interface ICountedPaymentData extends IPaymentData {
  count: number;
}

export interface IHourlySalesData {
  total: number;
  count: number;
}

export interface IReportData {
  dailyPayments: IPaymentData[];
  dailyCategories: IPaymentData[];
  hourlySales: IHourlySalesData[];
  dailyWaiters: ICountedPaymentData[];
}

export interface IReportService {
  getReport(day: string, signal?: AbortSignal): Promise<IReportData>;
}

interface IRawReport {
  sections: [
    {
      elements: [
        dailyPayments: [total: number, name: string][],
        dailyCategories: [total: number, name: string][],
        hourlySales: [hour: number, count: number, total: number][],
        dailyWaiters: [name: string, count: number, total: number][],
      ];
    },
  ];
}

const parseRawReport = (rawReport: IRawReport): IReportData => {
  const [dailyPayments, dailyCategories, hourlySales, dailyWaiters] = rawReport.sections[0].elements;

  const salesByHours = hourlySales.reduce((acc: Partial<Record<number, typeof hourlySales[number]>>, cur) => {
    const [hour] = cur;
    acc[hour] = cur;
    return acc;
  }, {});

  return {
    dailyPayments: dailyPayments.map(([total, name]) => ({ total: total / 1000, name })),
    dailyCategories: dailyCategories.map(([total, name]) => ({ total: total / 1000, name })),
    hourlySales: Array.from({ length: 24 }, (_v, hour) => {
      const item = salesByHours[hour];
      if (!item) return { count: 0, total: 0 };
      const [, count, total] = item;
      return { count, total: total / 1000 };
    }),
    dailyWaiters: dailyWaiters.map(([name, count, total]) => ({ name, total: total / 1000, count })),
  };
};

const fetchMockReport = async (signal?: AbortSignal): Promise<IRawReport> => {
  const rawReport = (await import('../../task/response.json')) as unknown as IRawReport;
  await delay(1_000, signal);
  return rawReport;
};

const MockReportService: IReportService = {
  async getReport(_day: string, signal?: AbortSignal): Promise<IReportData> {
    const rawReport = await fetchMockReport(signal);
    return parseRawReport(rawReport);
  },
};

export default MockReportService;
