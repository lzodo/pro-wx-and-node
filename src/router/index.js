import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/List.vue"),
  },
  {
    path: "/my",
    name: "My",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/My.vue"),
  },
  {
    path: "/card",
    name: "Card",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Card.vue"),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
