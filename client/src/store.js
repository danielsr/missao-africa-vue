import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    authUser: null,
    msgs: {
      login: undefined
    },
    users: []
  },
  actions: {

    async register({ commit }, user) {
      commit('setLoading', true);
      const res = await api.post('register', user);
      console.log(res.data);
      commit('setLoading', false);
    },

    async login({ commit }, user) {
      commit('setLoading', true);
      const res = await api.post('login', user);
      if (res.success) {
        localStorage.setItem('token', res.token);
        commit('setAuthUser', res.data.authUser);
        commit('setMsg', { key: 'login', msg: undefined });
      } else {
        commit('setMsg', { key: 'login', msg: res.data.msg });
      }
      commit('setLoading', false);
    },

    async loadUsers({ commit }) {
      commit('setLoading', true);
      try {
        const res = await api.get('users');
        commit('loadedUsers', res.data);
      } catch (err) {
        console.log(err);
      } finally {
        commit('setLoading', false);
      }
    }
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    loadedUsers(state, users) {
      state.users = users;
    },
    setAuthUser(state, user) {
      state.authUser = user;
    },
    setMsg(state, payload) {
      const { msg, key } = payload;
      state.msgs[key] = msg;
    }
  }
});
