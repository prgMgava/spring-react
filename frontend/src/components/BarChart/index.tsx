import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { requests } from "utils/requests";

interface SeriesData {
  name: string;
  data: number[];
}
interface ChartData {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
}

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: { categories: [] },
    series: [],
  });
  useEffect(() => {
    requests.get("/sales/success-by-seller").then((response) => {
      const data = response.data as SaleSuccess[];
      const myLabels = data.map((x) => x.sellerName);
      const mySeries = data.map((x) => round((100 * x.deals) / x.visited, 1));
      setChartData({
        labels: { categories: myLabels },
        series: [
          {
            name: "% Sucesso",
            data: mySeries,
          },
        ],
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChart;
