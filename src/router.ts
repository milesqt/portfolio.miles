import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/index.vue'
import Works from './pages/works.vue'
import About from './pages/about.vue'

const router = createRouter({
  history: createWebHistory('/portfolio.miles/'),
  routes: [
    { path: '/', component: Home },
    { path: '/works', component: Works },
    { path: '/about', component: About }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } 
    else {
      return { top: 0 }
    }
  }
})

export default router