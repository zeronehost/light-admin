import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import antd from "ant-design-vue";

Vue.config.productionTip = false;
import "ant-design-vue/dist/antd.css";

require("../mock/index");

Vue.use(antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
