import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: () =>
      import(/* webpackChunkName: "createPost" */ "../views/CreatePost.vue"),
  },
  {
    path: "/drone-page",
    name: "DronePage",
    component: () =>
      import(/* webpackChunkName: "DronePage" */ "../views/DronePage.vue"),
  },
  {
    path: "/:postId",
    name: "PostDetails",
    component: () =>
      import(/* webpackChunkName: "postDetails" */ "../views/PostDetails.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
