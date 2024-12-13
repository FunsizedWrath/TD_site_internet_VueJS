import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; 
import AccueilComponent from './components/AccueilComponent.vue';
import ContactForm from './components/ContactForm.vue';
import APIComponent from './components/APIComponent.vue';
import BonusComponent from './components/BonusComponent.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter); // Utilise VueRouter
// Définit les routes
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'accueil', component: AccueilComponent },
    { path: '/contact', name: 'contact', component: ContactForm },
    { path: '/api', name: 'api', component: APIComponent },
    { path: '/bonus', name: 'bonus', component: BonusComponent }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
