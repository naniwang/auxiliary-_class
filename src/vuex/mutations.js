import cookie from 'js-cookie';
const mutations = {
  /**
   * 记录token到vuex
   * @param  {[type]} state [description]
   * @param  {[type]} data  [description]
   * @return {[type]}       [description]
   */
  tokenToVuex(state, data) {
    let fdbToken = cookie.get('fdbToken');
    if (fdbToken != undefined) {
      state.fdbToken = fdbToken;
    }
  },
  // 记录user到vuex
  userToVuex(state, data) {
    let user = cookie.get('fdbUser');
    console.log(user,'user=======')
    if (user != undefined) {
      state.user = JSON.parse(user);
    }
  },
  /**
   * 帐号登录 记录到 VUEX & Cookie
   * @param  {[type]} state [description]
   * @param  {[type]} data  [description]
   * @return {[type]}       [description]
   */
  cookieLoginToVuex(state, data) {
    let fdbToken = cookie.get('fdbToken');
    if (fdbToken != undefined) {
      state.fdbToken = fdbToken;
    }

    let user = cookie.get('fdbUser');
    if (user != undefined) {
      state.user = JSON.parse(user);
    }
  },
  /**
   * 退出登录 清空 VUEX & Cookie
   * @param  {[type]} state [description]
   * @return {[type]}       [description]
   */
  logout(state) {
    cookie.remove('fdbToken');
    cookie.remove('fdbUser');

    state.fdbToken = '';
    state.user = {};
  },
}
export default mutations;