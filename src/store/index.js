import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

const files = require.context("./modules", true, /\.js$/);

let modules = {};

files.keys().forEach(path => {
  const key = path.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = files(path);
  modules[key] = value.default;
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  getters
});
