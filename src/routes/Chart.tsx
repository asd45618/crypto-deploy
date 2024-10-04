import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ReactApexChart from 'react-apexcharts';

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface IApex {
  name: string;
  data: [];
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 5000,
    }
  );
  // console.log(data);
  return (
    <h1>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ReactApexChart
          type='candlestick'
          series={[
            {
              data:
                data?.map((price) => ({
                  x: new Date(price.time_close).toISOString(),
                  y: [price.open, price.high, price.low, price.close],
                })) || [],
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            tooltip: {
              enabled: true,
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
            xaxis: {
              categories: data?.map((price) =>
                new Date(price.time_close).toISOString()
              ),
            },
          }}
        />
      )}
    </h1>
  );
}

export default Chart;
