
export default[{
  path:'/',
  name:'HOME',
  redirect:{
    name:'LOGIN'
  },
  children:[
    {
      path:'/login',
      name:'LOGIN',
      meta:{
        title:'登录',
        hideInMenu: true,
      },
      component:resolve=>required(['@/views/login.vue'],resolve)
    }
  ]
}]