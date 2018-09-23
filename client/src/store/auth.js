import api from '../api';
import router from '../router';

export default {
  state: {
    authUser: null
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
        localStorage.setItem('token', res.data.token);
        commit('setAuthUser', res.data.authUser);
        commit('setMsg', { key: 'login', msg: undefined });
        router.push('/');
      } else {
        commit('setMsg', { key: 'login', msg: res.data.msg });
      }
      commit('setLoading', false);
    }
  },
  mutations: {
    setAuthUser(state, user) {
      state.authUser = user;
    }
  }
};

