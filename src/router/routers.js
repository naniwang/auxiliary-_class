import studentRouter from './modules/student'
import courseRouter from './modules/course'
import adminRouter from './modules/admin'
export default [{
    // 登录
    path: '/',
    name: 'HOME',
    redirect: {
      name: 'LOGIN'
    },
  },
  {
    path: '/login',
    name: 'LOGIN',
    meta: {
      title: '登录',
      hideInMenu: true,
    },
    component: resolve => require(['@/views/login.vue'], resolve),
  },
  {
    path: '/entrance',
    name: 'student-entrance',
    meta: {
      title: '学生入口',
      hideInMenu: true,
    },
    component: resolve => require(['@/views/entrance.vue'], resolve),
  },
  {
    path: '/panel',
    name: 'Panel',
    redirect: {
      name: 'student-list'
    },
    component: resolve => require(['@/views/panel.vue'], resolve),
    children: [
      ...studentRouter,
      ...courseRouter,
      ...adminRouter
    ]
  },
]