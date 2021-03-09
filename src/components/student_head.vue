<template>
  <div class="student-head-component">
    <div class="student-head-content">
      <div class="head-left">logo</div>
      <div class="head-center">
        <Menu
          mode="horizontal"
          theme="dark"
          :active-name="routeName"
          v-show="$route.name!='student-entrance'"
        >
          <MenuItem name="score-inquiry" :to="{name:'score-inquiry'}">成绩查询</MenuItem>
          <MenuItem name="personal-info" :to="{name:'personal-info'}">个人信息</MenuItem>
          <MenuItem name="rates">
            <span @click="ratesShow=true">收费标准</span>
          </MenuItem>
          <MenuItem name="Outing" :to="{name:'Outing'}">郊游</MenuItem>
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
    <!-- 收费标准弹窗 -->
    <rates v-model="ratesShow"></rates>
  </div>
</template>
<script>
import rates from '@/components/rates'
export default {
  components: {
    rates
  },
  data () {
    return {
      routeName: "",
      ratesShow: false
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
  background: #515a6e;
  color: #fff;
  .student-head-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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