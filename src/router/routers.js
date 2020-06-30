import Layout from "@/components/layout";
import blog from "./blog";
const pages = [{
  path: "/",
  redirect: {
    name: "index"
  },
  component: Layout,
  children: [{
    path: "index",
    name: "index",
    meta: {auth: true, title: "首页"},
    component: () => import("@/views/main.vue")
  }, ...blog]
}];

export default [...pages, {
  path: "/login",
  name: "login",
  component: () => import("@/views/login")
}, {
  path: "*",
  name: "404",
  component: () => import("@/views/error-404")
}];