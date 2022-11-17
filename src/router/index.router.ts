import { createRouter, createWebHistory, type Router } from "vue-router";

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "todos",
      component: () => import("@/views/TodosView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/auth/RegisterView.vue"),
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: () => import("@/views/auth/SignInView.vue"),
    },
  ],
});

export default router;
