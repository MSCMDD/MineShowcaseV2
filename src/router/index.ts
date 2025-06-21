// export default router;
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
// console.log(routes)
const router = createRouter({
  history: createWebHistory("/"),
  routes,
})

export default router
