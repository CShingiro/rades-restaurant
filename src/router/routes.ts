import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/LandingPageItems.vue'),
    children: [
      { path: '', component: () => import('src/pages/LandingPage.vue') },
    ],
  },
  {
    path: '/home',
    component: () => import('src/pages/HomePage.vue'),
  },
  {
    path: '/menu',
    component: () => import('src/pages/MenuPage.vue'),
  },
  {
    path: '/menu/breakfast',
    component: () => import('src/pages/BreakfastMenuPage.vue'),
  },
  {
    path: '/menu/lunch',
    component: () => import('src/pages/LunchMenuPage.vue'),
  },
  {
    path: '/menu/dinner',
    component: () => import('src/pages/DinnerMenuPage.vue'),
  },
  {
    path: '/menu/snacks',
    component: () => import('src/pages/SnackMenuPage.vue'),
  },
  {
    path: '/about',
    component: () => import('src/pages/AboutPage.vue'),
  },
  {
    path: '/contact',
    component: () => import('src/pages/ContactPage.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
