import Vue from 'vue'
import App from './App.vue'

import vuex from 'vuex'; // vuex
Vue.use(vuex);

import store from './vuex/store';

import router from './router/index'; // 路由

import axios from 'axios'; //请求管理器
Vue.prototype.$axios = axios;

import api from './api/api.js'; // 引入 api
Vue.prototype.$api = api;

import cookie from 'js-cookie'; // cookie
Vue.prototype.$cookie = cookie;

import filters from './filters';
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
Vue.prototype.$filters = filters;

import ViewUI from 'view-design';
Vue.use(ViewUI, {
  transfer: true,
});
import 'view-design/dist/styles/iview.css';

import './assets/css/common.css';
import './assets/css/base.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')