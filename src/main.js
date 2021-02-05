import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Default from './components/layout/DefaultLayout.vue';
import Simple from './components/layout/SimpleLayout.vue';
Vue.component('default-layout', Default);
Vue.component('simple-layout', Simple);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
