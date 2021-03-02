<template>
  <div class="student-head-component">
    <div class="head-left">logo</div>
    <div class="head-center" v-if="$route.name!='student-entrance'">
      <Menu mode="horizontal" theme="dark" :active-name="routeName">
        <MenuItem name="score-inquiry" :to="{name:'score-inquiry'}">成绩查询</MenuItem>
        <MenuItem name="personal-info" :to="{name:'personal-info'}">个人信息</MenuItem>
      </Menu>
    </div>
    <div class="head-right">
      <Dropdown>
        <div style="display: inline-block;">
          <span style="margin-right:5px">{{this.$store.state.user.name}}</span>
          <Icon type="ios-arrow-down" class="down-select"></Icon>
        </div>
        <DropdownMenu slot="list" class="user-dropdown">
          <Button icon="md-power" @click="loginOut()" type="text">退出登录</Button>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routeName: ""
    }
  },
  watch: {
    '$route.name': {
      handler (value) {
        console.log(value)
        this.routeName = value
      }
    }
  },
  created () {
    this.routeName = this.$route.name
  },
  methods: {
    // 退出登录
    loginOut () {
      this.$store.commit("logout");
      this.$router.push({
        name: 'LOGIN'
      })
    }
  }
}
</script>
<style lang="scss">
.student-head-component {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eee;
  padding: 0 100px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #515a6e;
  color: #fff;
  .ivu-menu-horizontal {
    height: 59px;
  }
  .ivu-tabs {
    color: #fff;
  }
  .ivu-tabs-bar {
    border: 0;
    margin-bottom: 0;
  }
}
</style>