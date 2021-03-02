<template>
  <Header class="layout-header">
    <div class="pull-left">logo</div>
    <div class="pull-right">
      <Dropdown>
        <div style="display: inline-block;">
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
}
</style>