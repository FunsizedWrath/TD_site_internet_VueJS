import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Assurez-vous d'importer VueRouter
import TexteImageComponent from './components/TexteImageComponent.vue';
import ContactForm from './components/ContactForm.vue';
import APIComponent from './components/APIComponent.vue';
import BonusComponent from './components/BonusComponent.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter); // Utilisez VueRouter

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'accueil', component: TexteImageComponent },
    { path: '/contact', name: 'contact', component: ContactForm },
    { path: '/api', name: 'api', component: APIComponent },
    { path: '/bonus', name: 'bonus', component: BonusComponent }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
