import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => System.import('./components/Home/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => System.import('./components/About/About.vue')
    }
  ]
});

export default router;
