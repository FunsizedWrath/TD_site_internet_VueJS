import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import TexteImageComponent from './components/TexteImageComponent.vue';

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'accueil', component: TexteImageComponent },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
