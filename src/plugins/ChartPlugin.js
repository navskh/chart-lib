import Chart from "chart.js/auto";
/*eslint-disable */
export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
  },
};
