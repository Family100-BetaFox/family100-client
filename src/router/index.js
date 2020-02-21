import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/playground',
    name: 'Playground',
    component: () => import('../views/Playground.vue')
  },
  {
    path: '/battleplace',
    name: 'Battle Place',
    component: () => import('../views/battlePlace.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
