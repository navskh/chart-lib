import Vue from "vue";
import App from "./App.vue";
import ChartPlugin from "./plugins/ChartPlugin";

Vue.config.productionTip = false;

// install 이 실행 됨
Vue.use(ChartPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
