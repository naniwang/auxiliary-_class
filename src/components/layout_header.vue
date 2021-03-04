<template>
  <Header class="layout-header">
    <div class="pull-left head-logo">管理系统</div>
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
<style lang='scss'>
@function makeLongShadow($color) {
  $val: 0px 0px $color;
  @for $i from 1 through 40 {
    $color: fade-out(desaturate($color, 1%), 0.025);
    $val: #{$val}, #{$i * 0.25}px #{$i * 0.25}px #{$color};
  }
  @return $val;
}
.layout-header {
  color: #fff;
  .head-logo {
    font-size: 25px;
    font-weight: bold;
    color: #ffffff;
    transform: skewX(-5deg);
    white-space: nowrap;
    letter-spacing: 4px;
    text-shadow: makeLongShadow(hsl(219, 68%, 75%));
    -webkit-box-reflect: below 5
      linear-gradient(transparent 30%, rgba(0, 0, 0, 0.35));
    // filter: contrast(5);
  }
}
</style>