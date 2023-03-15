import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

Vue.config.productionTip = false

Vue.use(Vuetify);

Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);

new Vue({
  router,
  store,  
  render: h => h(App)
}).$mount('#app')
