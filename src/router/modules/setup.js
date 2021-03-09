const setupRouter = [{
  path: '/setup/rates',
  name: 'setup-rates',
  meta: {
    title: '收费标准',
    auth: true
  },
  component: resolve => require(['@/views/setup/rates.vue'], resolve)
}, ]
export default setupRouter