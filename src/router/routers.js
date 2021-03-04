import studentRouter from './modules/student'
import courseRouter from './modules/course'
import scoreRouter from './modules/score'
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
      auth:true,
      hideInMenu: true,
    },
    component: resolve => require(['@/views/entrance.vue'], resolve),
  },
  {
    path: '/score/inquiry',
    name: 'score-inquiry',
    meta: {
      title: '成绩查询',
      auth:true,
      hideInMenu: true,
    },
    component: resolve => require(['@/views/score-inquiry.vue'], resolve),
  },
  {
    path: '/personal/info',
    name: 'personal-info',
    meta: {
      title: '个人信息',
      auth:true,
      hideInMenu: true,
    },
    component: resolve => require(['@/views/personal-info.vue'], resolve),
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
      ...scoreRouter,
      ...adminRouter
    ]
  },
]