const studentRouter = [{
    path: '/student',
    name: 'student-list',
    meta: {
      title: '学生管理',
      auth: true
    },
    component: resolve => require(['@/views/student/list.vue'], resolve)
  },
  {
    path: '/student/add',
    name: 'student-add',
    meta: {
      title: '添加学生',
      auth: true
    },
    component: resolve => require(['@/views/student/add.vue'], resolve)
  }
]
export default studentRouter