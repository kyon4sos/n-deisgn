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
    component: () => import('@/views/WorkSpace'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
