import fetch from './http';
export default {
  /**
   * 学生登录
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  studentlogin(params) {
    return fetch.fetchGet('student/login', params);
  },
  /**
   * 管理员登录
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  managelogin(params) {
    return fetch.fetchGet('manage/login', params);
  },
  /**
   * 获取学生列表
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  studentlist(params) {
    return fetch.fetchGet('student/list', params);
  },
  /**
   * 添加编辑学生
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  addstudent(params) {
    return fetch.fetchGet('add/student', params);
  },
  /**
   * 删除学生
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  delstudent(params) {
    return fetch.fetchGet('del/student', params);
  },
}