const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Tabs = () => import("../views/Tabs.vue");
const RouteTabs = () => import("../views/RouteTabs.vue");
const Products = () => import("../components/RouterTabs/Products.vue");
const NotFound = () => import("../views/NotFound.vue");
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
  },
  {
    path: "/route-tabs",
    name: "route-tabs",
    component: RouteTabs,
    children: [
      {
        path: "products",
        name: "route-tabs.products",
        component: Products
      },
      {
        path: "*",
        name: "404",
        component: NotFound
      }
    ]
  }
];
