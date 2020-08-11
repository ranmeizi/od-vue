import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainView from '../views/MainView'
import Search from '../views/Search/Search'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', redirect: to => '/main/search', },
  {
    path: '/main', component: MainView, children: [
      { path: '/main/search', name: 'search', component: Search, }
    ]
  },

];

const router = new VueRouter({
  routes,
});

export default router;
