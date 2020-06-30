export default [{
  path: "index",
  name: "index",
  meta: {auth: true, title: "博客管理"},
  component: () => import("@/views/blog/index.vue")
},{
  path: "add",
  name: "add",
  meta: {auth: true, title: "添加文章"},
  component: () => import("@/views/blog/add.vue")
}].map(item => {
  item.path = `blog/${item.path}`;
  item.name = `blog-${item.name}`;
  return item;
});