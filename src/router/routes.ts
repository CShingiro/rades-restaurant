import { RouteRecordRaw } from 'vue-router';
import HomePageVue from 'src/pages/HomePage.vue';
import AboutPageVue from 'src/pages/AboutPage.vue';
import ContactPageVue from 'src/pages/ContactPage.vue';
import BreakfastMenuPage from 'src/pages/BreakfastMenuPage.vue';
import LunchMenuPage from 'src/pages/LunchMenuPage.vue';
import DinnerMenuPage from 'src/pages/DinnerMenuPage.vue';
import SnackMenuPage from 'src/pages/SnackMenuPage.vue';


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
    component: HomePageVue,
  },
  {
    path: '/menu/breakfast',
    component: BreakfastMenuPage,
  },
  {
    path: '/menu/lunch',
    component: LunchMenuPage,
  },
  {
    path: '/menu/dinner',
    component: DinnerMenuPage,
  },
  {
    path: '/menu/snacks',
    component: SnackMenuPage,
  },
  {
    path: '/about',
    component: AboutPageVue,
  },
  {
    path: '/contact',
    component: ContactPageVue,
  },
  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
