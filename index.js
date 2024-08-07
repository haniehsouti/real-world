import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventCreate from "../views/EventCreate.vue";
import EventShow from "../views/EventShow.vue";

const routes = [
  {
    path: "/events",
    name: "events",
    component: EventList,
  },
  {
    path: "/event-create",
    name: "eventCreate",
    component: EventCreate,
  },
  {
    path: "/event-show/:id",
    name: "eventShow",
    component: EventShow,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

