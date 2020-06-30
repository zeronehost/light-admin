import Axios from "axios";

import {message} from "ant-design-vue";

import store from "@/store";

import {getToken} from "@/utils/auth";
console.log(process.env.VUE_APP_API_CONTEXT);
const Service = Axios.create({
  baseURL: process.env.VUE_APP_API_CONTEXT,
  timeout: 5000
});

// 拦截器
Service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 设置token
      config.headers["X-Token"] = getToken();
    }

    // if (config.data) {
      
    // }
    return config;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

Service.interceptors.response.use(
  response => {
    const res = response.data;
    if(res.code !== 0) {
      message.error(res.msg || "服务器异常", 5);

      if(res.code === -1) {
        message.warning("您已退出系统，请重新登录").then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.msg || "未知错误"));
    } else {
      return res;
    }
  },
  error => {
    console.error(error);
    message.error(error.message, 5);
    return Promise.reject(error);
  }
);

export default Service;

export const POST = "post";
export const GET = "get";