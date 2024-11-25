import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; // Assurez-vous d'importer VueRouter
import TexteImageComponent from './components/TexteImageComponent.vue';
import ContactForm from './components/ContactForm.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter); // Utilisez VueRouter

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'accueil', component: TexteImageComponent },
    { path: '/contact', name: 'contact', component: ContactForm }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
