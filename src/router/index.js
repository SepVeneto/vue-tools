import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: () => import('@/App.vue'),
    children: [
      {
        path: '/table',
        name: 'table',
        component: () => import('@/views/table/index.vue'),
      },
      {
        path: '/input',
        name: 'input',
        component: () => import('@/views/input/index.vue'),
      },
      {
        path: '/selet',
        name: 'select',
        component: () => import('@/views/select/index.vue'),
      },
      {
        path: '/button',
        name: 'button',
        component: () => import('@/views/button/index.vue'),
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search/index.vue'),
      },
      {
        path: '/switch',
        name: 'switch',
        component: () => import('@/views/switch/index.vue'),
      },
      {
        path: '/other',
        name: 'other',
        component: () => import('@/views/other/index.vue'),
      }
    ]
  },
]

export const router = new VueRouter({
  base: '/vue-tools',
  mode: 'hash',
  routes,
});
