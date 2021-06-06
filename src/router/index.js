import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'theCity',
    component: () => import('../pages/city/index.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../pages/detail/index.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../pages/detail/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
