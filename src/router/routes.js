const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Tabs = () => import("../views/Tabs.vue");
export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/tabs",
    name: "tabs",
    component: Tabs
  }
];
