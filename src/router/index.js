import Vue from "vue";
import VueRouter from "vue-router";

import VHome from "../views/v-home";
import VCart from "../views/v-cart";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: VHome
  },
  {
    path: "/cart",
    name: "Cart",
    component: VCart,
    props: true
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
