const courseRouter=[{
  path:'/course',
  name:'course-list',
  meta:{
    title:'课程管理',
    auth:true
  },
  component:resolve=>require(['@/views/course/list.vue'],resolve)
}]
export default courseRouter