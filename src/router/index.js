import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '@/layout/MainLayout';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/workspace',
    component: MainLayout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home'),
      },
    ],
  },
  {
    path: '/workspace',
    name: 'Workspace',
    component: () =>
      import(/* webpackChunkName: "WorkSpace" */ '@/views/WorkSpace'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
