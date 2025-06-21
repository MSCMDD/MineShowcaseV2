import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServerListView from "../views/ServerListView.vue";
import ServerDetailView from "../views/ServerDetailView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/servers",
      name: "servers",
      component: ServerListView,
    },
    {
      path: "/server/:id",
      name: "server-detail",
      component: ServerDetailView,
      props: true,
    },
  ],
});

export default router;
