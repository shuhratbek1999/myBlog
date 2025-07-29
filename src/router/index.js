import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import CategoryView from "../views/CategoryView.vue";
import ArticlesView from "../views/ArticlesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/category/:slug",
      name: "category",
      component: CategoryView,
      props: true,
    },
    {
      path: "/articles",
      name: "articles",
      component: ArticlesView,
      meta: {
        title: "Barcha Maqolalar",
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
