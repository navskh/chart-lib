<template>
  <div>
    <h1>chart.js</h1>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import LineChart from "./components/LineChart.vue";
import BarChart from "./components/BarChart.vue";

export default {
  // 컴포넌트 속성 && 인스턴스 옵션
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      chartDataSet: [],
    };
  },
  methods: {
    getChartData() {
      setTimeout(() => {});
    },
  },
  created() {
    // axios
    //   .get("charts/line/1")
    //   .then((response) => response.data)
    //   .catch((err) => console.log(err));
  },
};
</script>

<style></style>
