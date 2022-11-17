import { createRouter, createWebHistory, type Router } from 'vue-router'

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'todos',
      component: () => import('@/views/Todos.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/Register.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/views/auth/SignIn.vue')
    }
  ]
});

export default router;
