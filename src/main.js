import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component("nav-bar", {
  template: "<h1>我是标题栏</h1>"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

console.log("version:", process.env.VUE_APP_VERSION);
