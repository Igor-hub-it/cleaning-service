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
  {
    path: '/dayly',
    name: 'dayly',
    component: lazyView('Dayly'),
  },
  {
    path: '/general',
    name: 'general',
    component: lazyView('General'),
  },
  {
    path: '/window-washing',
    name: 'window-washing',
    component: lazyView('Window-washing'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
