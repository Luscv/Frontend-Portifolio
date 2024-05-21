import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name: 'test name',
    children: [{ path: '', component: () => import('../view/pages/HomePage.vue') }],
    meta: { title: 'My App'}
  },
  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('../view/pages/ErrorNotFound.vue'),
  // },
];

export default routes;
