const scoreRouter = [{
  path: '/score',
  name: 'score-list',
  meta: {
    title: '成绩管理',
    auth: true
  },
  component: resolve => require(['@/views/score/list.vue'], resolve)
},
// {
//   path: '/score/add',
//   name: 'score-add',
//   meta: {
//     title: '添加成绩',
//     auth: true
//   },
//   component: resolve => require(['@/views/student/add.vue'], resolve)
// }
]
export default scoreRouter