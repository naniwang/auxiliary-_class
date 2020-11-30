<template>
  <div class="panel">
    <div class="layout">
      <Layout>
        <Head></Head>
        <Layout>
          <Sider class="side-menu" width="160" hide-trigger>
            <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>课程
                </template>
                <MenuItem name="1-1" :to="{name:'course-list'}">课程列表</MenuItem>
                <MenuItem name="1-2" to="/login">Option 2</MenuItem>
                <MenuItem name="1-3">Option 3</MenuItem>
              </Submenu>
              <Submenu name="2">
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
  data() {
    return {};
  },
};
</script>