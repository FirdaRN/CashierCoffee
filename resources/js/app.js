import "./bootstrap";
import { createApp } from "vue";
import App from "./components/App.vue";
import CategoryList from "./components/Category/List.vue";
import StockList from "./components/Stock/List.vue";
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
      name:'stock-list', 
      path: '/stock-list', 
      component: StockList
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

createApp(App)
  .use(router)
  .mount('#app');
