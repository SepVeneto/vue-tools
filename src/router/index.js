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
      }
    ]
  },
]

export const router = new VueRouter({
  base: '/vue-tools',
  mode: 'history',
  routes,
});
