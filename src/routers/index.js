import { createRouter, createWebHashHistory } from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Work from "../views/Work.vue";
import NotFound from "../views/NotFound.vue";

const history = createWebHashHistory();
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/work",
    name: "work",
    component: Work,
  },
  {
    path: "/:notMatchPath(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({ history, routes });

export default router;