import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    posts: [],
    post: {},
  },
  getters: {
    getIsLoading: (state) => state.isLoading,
    getPosts: (state) => state.posts,
    getPost: (state) => state.post,
  },
  mutations: {
    SET_ISLOADING: (state, bool) => {
      state.isLoading = bool;
    },
    SET_POSTS: (state, payload) => {
      state.posts = payload;
    },
    SET_POST: (state, payload) => {
      state.post = payload;
    },
    ADD_POST: (state, payload) => {
      state.posts.push(payload);
    },
    REMOVE_POST: (state, { postId }) => {
      const index = state.posts.findIndex((post) => post.id == postId);
      state.posts.splice(index, 1);
    },
    UPDATE_POST: (state, payload) => {
      const index = state.posts.findIndex((post) => post.id == payload.id);
      state.posts.splice(index, 1, payload);
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      commit("SET_ISLOADING", true);
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        commit("SET_POSTS", data);
        commit("SET_ISLOADING", false);
      } catch (error) {
        console.log({ error });
      }
    },
    async fetchPost({ commit, state }, { postId }) {
      commit("SET_ISLOADING", true);
      const post = state.posts.filter((post) => post.id == parseInt(postId));
      commit("SET_POST", post[0]);
      commit("SET_ISLOADING", false);
    },
    addPost({ commit }, payload) {
      commit("ADD_POST", payload);
    },
  },
  modules: {},
});
