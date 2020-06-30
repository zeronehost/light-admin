import { getToken, setToken, removeToken } from "@/utils/auth";
import { login, logout } from "@/api/user";
import { resetRouter } from "@/router";


const getDefaultState = () => {
  return {
    token: getToken(),
    name: ""
  };
};

const state = getDefaultState();

const mutations = {
  REST_STATE: state => Object.assign(state, getDefaultState()),
  SET_TOKEN: (state, token) => (state.token = token),
  SET_NAME: (state, name) => (state.name = name),

};

const actions = {
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then((data) => {
        commit("SET_TOKEN", data.token);
        setToken(data.token);
        resolve();
      }).catch(err => reject(err));
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        removeToken();
        resetRouter();
        commit("REST_STATE");
        resolve();
      }).catch( err => {
        reject(err);
      });
    });
  },
  
  resetToken({ commit }) {
    // eslint-disable-next-line no-unused-vars
    return Promise((resolve, _) => {
      removeToken();
      commit("REST_STATE");
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};