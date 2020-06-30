import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routers";
import { getToken } from "@/utils/auth";

Vue.use(VueRouter);

function createRouter() {
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  // 进入拦截
  router.beforeEach(async (to, from, next) => {
    // 进度条开始
  
    // 设置页面标题
    
    // 获取token
    const hasToken = getToken();
    console.log("router ===>", to, hasToken);
    if(hasToken) {
      if(to.path === "/login") {
        // 已登录且是登录页是跳转首页
        next({path: "/"});
      } else {
        const hasGetUserInfo = true; // store.getters.name
        // 判断用户信息是否存在，存在则进入页面
        if(hasGetUserInfo) {
          next();
        } else {
          try {
            // 获取用户信息
            // await store.dispatch("user/getInfo");
            next();
          } catch (error) {
            // 生成会话跳转登录页
            next(`/login?redirct=${to.path}`);
          }
        }
      }
    } else if(to.matched.some(r => r.meta.auth)) {
      next(`/login?redirct=${to.path}`);
    } else {
      next();
    }
  });

  return router;
}

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
