import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import routes from './routers'
import store from '@/vuex/store'
import {
  getToken,
  getUser
} from '../libs/util'

const createRouter = () => new Router({
  mode: 'hash',
  base: '/',
  routes
});
const router = createRouter();
router.beforeEach(async (to, from, next) => {
  // 如有vuex没有登录信息 尝试同步cookie到vuex
  if (!store.state.fdbToken) {
    store.commit('cookieLoginToVuex');
  }
  const token = getToken()
  const user = getUser()
  if ((!token || !user) && to.meta.auth) {
    next({
      name: "LOGIN"
    })
  }else{
    next();
  }
})
export default router;