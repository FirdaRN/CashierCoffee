import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import mitt from "mitt";
import "./bootstrap";
import App from "./components/App.vue";
import CategoryList from "./components/Category/List.vue";
import PriceList from "./components/Price/List.vue";

const routes = [
    // { path: '/', component: App },
    { 
      name:'category-list', 
      path: '/category-list', 
      component: CategoryList
    },
    { 
      name:'price-list', 
      path: '/price-list', 
      component: PriceList
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
const emitter = mitt();

const app = createApp(App)
  .use(router);
  // .mount('#app');
app.config.globalProperties.emitter = emitter;
// app.config.globalProperties.$moment = moment;
// app.config.globalProperties.$http = axios;
// app.config.globalProperties.$store = store;
app.mount('#app');
export { app };
export default router;