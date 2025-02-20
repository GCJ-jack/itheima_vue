// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router

import { createRouter, createWebHistory } from "vue-router"; // Vue 3 使用的 router API
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/emp",
    name: "emp",
    component: () => import("../views/tlias/EmpView.vue"),
  },
  {
    path: "/dept",
    name: "dept",
    component: () => import("../views/tlias/DeptView.vue"),
  },
  {
    path: "/",
    redirect: "/emp", //表示重定向到/emp即可
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用 Vue 3 的浏览器历史模式
  routes,
});

export default router;
