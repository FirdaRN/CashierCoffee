import "./bootstrap";
import { createApp } from "vue";
import App from "./components/App.vue";
import CategoryList from "./components/Category/List.vue";
import PriceList from "./components/Price/List.vue";
import Detail from "./components/Detail.vue";
import { createRouter, createWebHistory } from 'vue-router'

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

createApp(App)
  .use(router)
  .mount('#app');
