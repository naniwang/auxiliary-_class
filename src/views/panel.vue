<template>
  <div class="panel">
    <div class="layout">
      <Layout>
        <Head></Head>
        <Layout>
          <Sider class="side-menu" width="160" hide-trigger>
            <Menu :active-name="activeName" theme="dark" width="auto" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>学生
                </template>
                <MenuItem name="student-list" :to="{name:'student-list'}">学生管理</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>课程
                </template>
                <MenuItem name="course-list" :to="{name:'course-list'}">课程管理</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>成绩
                </template>
                <MenuItem name="grade-list" :to="{name:'score-list'}">成绩管理</MenuItem>
              </Submenu>
              <Submenu name="4">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>管理员
                </template>
                <MenuItem name="admin-list" :to="{name:'admin-list'}">管理员管理</MenuItem>
              </Submenu>
              <Submenu name="5">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>设置
                </template>
                <MenuItem name="2-1">密码设置</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout style="width:100%;padding:20px">
            <router-view></router-view>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>
<script>
import Head from "@/components/layout_header";
export default {
  components: {
    Head,
  },
  data () {
    return {
      activeName: "student-list",
    };
  },
};
</script>