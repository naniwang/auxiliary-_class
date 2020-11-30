import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import routes from './routers'

const createRouter = () => new Router({
  mode: 'hash',
  base: '/',
  routes
});
const router = createRouter();
router.beforeEach(async (to, from, next) => {
  next();
})
export default router;