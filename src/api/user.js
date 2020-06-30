import request from "@/utils/request";
import { POST, GET } from "../utils/request";

/**
 * 登录
 * @param {Object} params 
 */
export function login(params) {
  return request({
    url: "/sys/login",
    method: POST,
    data: params
  });
}

/**
 * 获取用户信息
 */
export function getUserInfo () {
  return request({
    url: "/sys/user",
    method: GET
  });
}

export function logout () {
  return request({
    url: "/sys/logout",
    method: POST
  });
}