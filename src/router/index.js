import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Servicios from "../views/Servicios.vue";
import Presupuesto from "../views/Presupuesto.vue";
import Nosotros from "../views/Nosotros.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/servicios",
    name: "servicios",
    component: Servicios,
    children: [
      { path: "/servicios/:categoria", component: Servicios },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import ( /* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: Nosotros
  },
  {
    path: "/presupuesto",
    name: "presupuesto",
    component: Presupuesto
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;