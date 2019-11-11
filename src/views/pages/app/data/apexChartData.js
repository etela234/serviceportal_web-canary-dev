/*=========================================================================================
    File Name: apexChartData.vue
    Description: Data shown by charts
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

const themeColors = ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"];

export default {
  lineAreaChartSpline: {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
    chartOptions: {
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      colors: themeColors,
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00",
          "2018-09-19T01:30:00",
          "2018-09-19T02:30:00",
          "2018-09-19T03:30:00",
          "2018-09-19T04:30:00",
          "2018-09-19T05:30:00",
          "2018-09-19T06:30:00"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    }
  }
};
