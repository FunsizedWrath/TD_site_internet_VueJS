import { createRouter, createWebHistory } from 'vue-router';
import ContactForm from '../components/ContactForm.vue'; // Importe le composant ContactForm

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Accueil.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
console.log(router);

export default router;