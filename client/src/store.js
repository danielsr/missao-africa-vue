import Vue from 'vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    users: []
  },
  actions: {
    async register({ commit }, user) {
      commit('setLoading', true);
      const newUser = await api.post('register', user);
      console.log(newUser);
      commit('setLoading', false);
    },
    async loadUsers({ commit }) {
      commit('setLoading', true);
      const users = await api.get('users');
      commit('loadedUsers', users);
      commit('setLoading', false);
    }
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    loadedUsers(state, users) {
      state.users = users;
    }
  }
});
