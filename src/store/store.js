import Vue from "vue";
import Vuex from "vuex";
import posts from "./modules/posts";
import albums from "./modules/albums";
import axios from "axios";

Vue.use(Vuex);
const SET_USER = "SET_USER",
  SET_LOADING = "SET_LOADING";

export default new Vuex.Store({
  modules: {
    posts,
    albums
  },
  getters: {
    user: state => state.user,
    loading: state => state.loading
  },
  state: {
    user: null,
    loading: false
  },
  mutations: {
    [SET_USER]: (state, payload) => {
      state.user = payload;
    },
    [SET_LOADING]: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    getUser({ commit }) {
      return axios.get("/users/2").then(resp => {
        commit(SET_USER, resp.data);
        return resp.data;
      });
    },
    setLoading({ commit }, state) {
      commit(SET_LOADING, state);
    }
  }
});
