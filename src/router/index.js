import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Formbasic from "../views/Formbasic.vue";
import Classbinding from "../views/Classbinding.vue";
import Event from "../views/Event.vue";
import Compute_Watch from "../views/Compute_Watch.vue";
import SeverData from "../views/SeverData.vue";
import ComponentExample from "../views/ComponentExample.vue";
import ChildData from "../views/ChildData.vue";
import ChildEvent from "../views/ChildEvent.vue";
import Slot from "../views/Slot.vue";
import ProvideInject from "../views/ProvideInject.vue";
import ProvideInjectChild from "../views/ProvideInjectChild.vue";
import Customdirective from "../views/Customdirective.vue";
import storeAccess from "../views/storeAccess.vue";
import Kakaologin from "../views/Kakaologin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lendering",
    name: "Lendering",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "lendering" */ "../views/Lendering.vue"),
  },
  {
    path: "/formbasic",
    name: "Formbasic",
    component: Formbasic,
  },
  {
    path: "/classbinding",
    name: "Classbinding",
    component: Classbinding,
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: "/compute_watch",
    name: "Compute_Watch",
    component: Compute_Watch,
  },
  {
    path: "/severdata",
    name: "SeverData",
    component: SeverData,
  },
  {
    path: "/componentexample",
    name: "ComponentExample",
    component: ComponentExample,
  },
  {
    path: "/childdata",
    name: "ChildData",
    component: ChildData,
  },
  {
    path: "/childevent",
    name: "ChildEvent",
    component: ChildEvent,
  },
  {
    path: "/slot",
    name: "Slot",
    component: Slot,
  },
  {
    path: "/provideinject",
    name: "ProvideInject",
    component: ProvideInject,
  },
  {
    path: "/provideinjectchild",
    name: "ProvideInjectChild",
    component: ProvideInjectChild,
  },
  {
    path: "/customdirective",
    name: "Customdirective",
    component: Customdirective,
  },
  {
    path: "/storeaccess",
    name: "storeAccess",
    component: storeAccess,
  },
  {
    path: "/kakaologin",
    name: "Kakaologin",
    component: Kakaologin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
