const courseRouter = [{
    path: '/course',
    name: 'course-list',
    meta: {
      title: '课程管理',
      auth: true
    },
    component: resolve => require(['@/views/course/list.vue'], resolve)
  },
  {
    path: '/course/add',
    name: 'course-add',
    meta: {
      title: '添加课程',
      auth: true
    },
    component: resolve => require(['@/views/course/add.vue'], resolve)
  }
]
export default courseRouter