<template>
  <div>
    <canvas ref="lineChart" id="lineChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
/*eslint-disable */
export default {
  mounted() {
    // var ctx = document.getElementById("lineChart").getContext("2d");
    var ctx = this.$refs.lineChart;
    const lineChart = new this.$_Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },
    });
  },
};
</script>

<style></style>
