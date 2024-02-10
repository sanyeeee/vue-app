import { createRouter, createWebHistory } from 'vue-router'

const routes: any [] = []

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
