import fetch from './http';
export default {
  /**
   * 学生登录
   */
  studentlogin(params) {
    return fetch.fetchGet('api/student/login', params);
  },
  /**
   * 管理员登录
   */
  managelogin(params) {
    return fetch.fetchGet('api/admin/login', params);
  },
  /**
   * 获取用户信息
   */
  userinfo(params) {
    return fetch.fetchGet('api/user/info', params);
  },
  /**
   * 获取学生列表
   */
  studentlist(params) {
    return fetch.fetchGet('api/student/list', params);
  },
  /**
   * 添加编辑学生
   */
  addstudent(params) {
    return fetch.fetchGet('api/add/student', params);
  },
  /**
   * 删除学生
   */
  delstudent(params) {
    return fetch.fetchGet('api/del/student', params);
  },
  /**
   * 获取学生详情
   */
  studentinfo(params) {
    return fetch.fetchGet('api/student/info', params);
  },
  /**
   * 修改学生密码
   */
  updatestudentpwd(params) {
    return fetch.fetchGet('api/update/student/pwd', params);
  },
  /**
   * 获取课程列表
   */
  courselist(params) {
    return fetch.fetchGet('api/course/list', params);
  },
  /**
   * 添加课程
   */
  addcourse(params) {
    return fetch.fetchGet('api/add/course', params);
  },
  /**
   * 删除课程
   */
  delcourse(params) {
    return fetch.fetchGet('api/delete/course', params);
  },
  /**
   * 获取课程详情
   */
  courseinfo(params) {
    return fetch.fetchGet('api/course/info', params);
  },
  /**
   * 管理员列表
   */
  adminlist(params) {
    return fetch.fetchGet('api/admin/list', params);
  },
  /**
   * 添加管理员
   */
  addadmin(params) {
    return fetch.fetchGet('api/add/admin', params);
  },
  /**
   * 设置管理员离职或在职
   */
  updateadminstatus(params) {
    return fetch.fetchGet('api/update/admin/status', params);
  },
}