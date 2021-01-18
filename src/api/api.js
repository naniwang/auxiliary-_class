import fetch from './http';
export default {
  /**
   * 学生登录
   */
  studentlogin(params) {
    return fetch.fetchGet('student/login', params);
  },
  /**
   * 管理员登录
   */
  managelogin(params) {
    return fetch.fetchGet('manage/login', params);
  },
  /**
   * 获取学生列表
   */
  studentlist(params) {
    return fetch.fetchGet('student/list', params);
  },
  /**
   * 添加编辑学生
   */
  addstudent(params) {
    return fetch.fetchGet('add/student', params);
  },
  /**
   * 删除学生
   */
  delstudent(params) {
    return fetch.fetchGet('del/student', params);
  },
  /**
   * 修改学生密码
   */
  updatestudentpwd(params) {
    return fetch.fetchGet('update/student/pwd', params);
  },
  /**
   * 获取课程列表
   */
  courselist(params) {
    return fetch.fetchGet('course/list', params);
  },
  /**
   * 添加课程
   */
  addcourse(params) {
    return fetch.fetchGet('add/course', params);
  },
  /**
   * 删除课程
   */
  delcourse(params) {
    return fetch.fetchGet('delete/course', params);
  },
  /**
   * 添加管理员
   */
  addadmin(params) {
    return fetch.fetchGet('add/admin', params);
  },
}