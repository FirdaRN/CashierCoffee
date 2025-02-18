import "./bootstrap";
import { createApp } from "vue";
import App from "./components/App.vue";
import List from "./components/Category/List.vue";
import Detail from "./components/Detail.vue";
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // { path: '/', component: App },
    { 
      name:'list', 
      path: '/list', 
      component: List
    },
    { 
      name:'detail', 
      path: '/detail', 
      component: Detail
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

createApp(App)
  .use(router)
  .mount('#app');
