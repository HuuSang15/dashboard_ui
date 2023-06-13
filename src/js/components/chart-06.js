import ApexCharts from "apexcharts";

// ===== chartSix
const chart06 = () => {
  var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#99C2A2', '#C5EDAC'],
    series: [
      {
        name: 'Department A',
        type: 'column',
        data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
      },
      {
        name: "Department B",
        type: 'column',
        data: [10, 19, 27, 26, 34, 35, 40, 38]
      }
    ],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    },
    yaxis: [
      {
        seriesName: 'Column A',
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: "Columns"
        }
      },
      {
        seriesName: 'Column A',
        show: false
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  };
  var chart = new ApexCharts(document.querySelector("#chartSix"), options);
  chart.render();
};

export default chart06;