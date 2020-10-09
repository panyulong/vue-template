import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './permits.js';
import './plugins/loading';
import './plugins/vant';
// import './plugins/units';
import './plugins/flexible';

import 'nprogress/nprogress.css';
import 'normalize.css';

import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

let baseUrl = process.env.BASE_URL;
Vue.prototype.$BASEURL = baseUrl;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');