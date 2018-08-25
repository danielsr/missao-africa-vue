import Vue from 'vue';
import Router from 'vue-router';
import Users from './views/Users';
import Login from './views/Login';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      children: [
        {
          path: ':id',
          name: 'user-modal',
          component: () => import(/* webpackChunkName: "user-modal" */ './views/Users/UserModal.vue'),
        }
      ]
    },
  ],
});
