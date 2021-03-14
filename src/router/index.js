import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brands from '../views/Brands.vue'
import Drivers from '../views/Drivers.vue'
import Privacy from '../views/Privacy.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brands',
    name: 'Brands',
    component: Brands
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: Drivers
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
