import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import { routes } from "./routes.js";
import { store } from "./store";
import axios from "axios";

Vue.config.productionTip = false;
Vue.use(VueRouter);

axios.defaults.baseURL = "localhost:4000/api/services";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("accessToken") || null;
axios.defaults.headers.get["Accepts"] = "application/json";

const router = new VueRouter({
  routes,
  mode: "history",
});
new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
