import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

Vue.config.productionTip = false


Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
