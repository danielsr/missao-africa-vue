import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    users: [],
    authUser: null
  },
  actions: {
    async register({ commit }, user) {
      commit('setLoading', true);
      const newUser = await api.post('register', user);
      console.log(newUser);
      commit('setLoading', false);
    },
    async login({ commit }, user) {
      commit('setLoading', true);
      const res = await api.post('login', user);
      if (res) {
        localStorage.setItem('token', res.token);
        commit('setAuthUser', res.authUser);
      }
      commit('setLoading', false);
    },
    async loadUsers({ commit }) {
      try {
        commit('setLoading', true);
        const users = await api.get('users');
        commit('loadedUsers', users);
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
    }
  }
});
