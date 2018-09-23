import api from '../api';

export default {
  state: {
    users: []
  },
  actions: {
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
    loadedUsers(state, users) {
      state.users = users;
    }
  }
};

