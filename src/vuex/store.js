import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// import panelRouter from '../router/routers';
import mutations from './mutations';
// import {
//   getMenuByRouter
// } from '../libs/util';
const state = {
  activatedRouterName: '', //当前路由name
  fdbToken: '',
  user: {}
}
export default new Vuex.Store({
  state,
  mutations,
  // getters: {
  //   menuPanelList: (state) => getMenuByRouter(panelRouter, state.access)
  // }
})