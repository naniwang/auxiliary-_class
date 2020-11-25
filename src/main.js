import Vue from 'vue'
import App from './App.vue'

import vuex from 'vuex'; // vuex
Vue.use(vuex);

import store from './vuex/store';

import router from './router/index'; // 路由

import axios from 'axios'; //请求管理器
Vue.prototype.$axios = axios;

import ViewUI from 'view-design';
Vue.use(ViewUI, {
  transfer: true,
});
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
