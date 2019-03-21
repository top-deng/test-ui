import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import TestUI from 'top-test-ui'
Vue.use(TestUI)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');