import { createRouter, createWebHashHistory } from "vue-router";

function lazyView(viewName) {
  return () => import(/* webpackChunkName: "[request]" */ `@/views/${viewName}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyView('Home'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
