import Vue from "vue";
import Notifications from "vue-notification";
import dateformat from "dateformat";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Spinner from "@/components/Spinner";
import AppPage from "@/components/AppPage";
import AppList from "@/components/AppList";
import "@/axios.config";
Vue.config.productionTip = false;

Vue.use(Notifications);

Vue.filter("trimmer", function(value) {
  if (value) {
    return value.slice(0, 100) + "...";
  }
  return value;
});

Vue.filter("format", function(value) {
  return dateformat(value, "dd/mm/yyyy");
});

Vue.component("app-spinner", Spinner);
Vue.component("app-page", AppPage);
Vue.component("app-list", AppList);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
