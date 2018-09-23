import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import users from './users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    msgs: {
      login: undefined
    }
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setMsg(state, { msg, key }) {
      state.msgs[key] = msg;
    }
  },
  modules: {
    auth,
    users
  }
});
