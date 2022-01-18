import HomePage from './pages/HomePage.vue';
import ApartmentPage from './pages/Apartment.vue';
import VueRouter from 'vue-router';
import ErrorPage from './pages/ErrorPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'homepage',
  },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'apartment',
  },
  {
    path: '*',
    component: ErrorPage,
    name: 'error-page',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
