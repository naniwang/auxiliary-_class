<template>
  <Header class="layout-header">
    <div class="header-left">logo</div>
    <div class="header-right">
      <Dropdown>
        <div style="display: inline-block;">
          <!-- <img class="avatar m-r-x" :src="$store.state.user.avatar" /> -->
          <span style="margin-right:5px">{{$store.state.user.account}}</span>
          <Icon type="ios-arrow-down" class="down-select"></Icon>
        </div>
        <DropdownMenu slot="list" class="user-dropdown">
          <Button icon="md-power" @click="loginOut()" type="text">退出登录</Button>
        </DropdownMenu>
      </Dropdown>
    </div>
  </Header>
</template>
<script>
export default {
  data () {
    return {};
  },
  mounted () {
    console.log(this.$store.state.user, 'user')
  },
  methods: {
    loginOut () {
      this.$store.commit("logout");
      this.$router.push({
        name: 'LOGIN'
      })
    },
  },
};
</script>
<style lang='scss' scoped>
.layout-header {
  color: #fff;
  .header-left {
    float: left;
  }
  .header-right {
    float: right;
  }
}
</style>