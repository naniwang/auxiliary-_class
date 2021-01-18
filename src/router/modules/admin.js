const adminRouter = [{
  path: '/admin',
  name: 'admin-list',
  meta: {
    title: '管理员管理',
    auth: true
  },
  component: resolve => require(['@/views/admin/list.vue'], resolve)
}, ]
export default adminRouter