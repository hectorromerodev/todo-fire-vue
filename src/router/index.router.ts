import { createRouter, createWebHistory, type Router } from "vue-router";

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/todos",
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
    {
      path: "forgot-password",
      name: "forgot-password",
      component: () => import("@/views/auth/ForgotPasswordView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue"),
    }
  ],
});

export default router;
