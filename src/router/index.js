import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Privacy from '../views/Privacy';
import Violation from '../views/Violation';
import Map from '../views/Map';
import BreastfeedingInCovid19 from '../views/BreastfeedingInCovid19';
import What from '../views/What';
import InternationalCode from '../views/InternationalCode';
import Support from '../views/Support';


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
      redirect: { name: 'what' },
      children: [
        {
          path: '/breastfeeding-in-covid19',
          name: 'breastfeeding-in-covid19',
          component: BreastfeedingInCovid19,
        },
        {
          path: '/what-is-bfcs',
          name: 'what',
          component: What,
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
      path: '/support',
      name: 'support',
      component: Support,
    },
    {
      path: '**',
      redirect: { name: 'breastfeeding-in-covid19' },
    },
  ],
});
