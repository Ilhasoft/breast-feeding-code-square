import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Privacy from '../views/Privacy';
import Violation from '../views/Violation';
import Map from '../views/Map';
import What from '../views/What';
import Tips from '../views/Tips';
import InternationalCode from '../views/InternationalCode';


Vue.use(Router);

export default new Router({
  mode: 'history',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    }
  },
  routes: [
    {
      path: '/',
      beforeEnter: async (to, from, next) => {
        next('index');
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      redirect: { name: 'internationalCode' },
      children: [
        {
          path: '/what',
          name: 'what',
          component: What,
        },
        {
          path: '/tips',
          name: 'tips',
          component: Tips,
        },
        {
          path: '/what-is-violation',
          name: 'violation',
          component: Violation,
        },
        {
          path: '/international-code',
          name: 'internationalCode',
          component: InternationalCode,
        },
      ]
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    },
    {
      path: '**',
      redirect: { name: 'what' },
    },
  ],
});
