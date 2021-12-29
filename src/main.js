import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import HelloWorld from  "./components/HelloWorld.vue";
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/', component: HelloWorld }
];
const router = new VueRouter({ routes });
new Vue({
  router, 
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
