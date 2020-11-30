<template>
  <div class="login" style="height:100%;background:#f8f8f8">
    <div class="login-box">
      <div class="form">
        <!-- 注册 -->
        <Form ref="formRegist" :model="formRegist" :rules="ruleRegist" v-show="loginType==0">
          <h1 class="title">注册</h1>
          <FormItem prop="mobile">
            <Input type="text" v-model="formRegist.mobile" placeholder="请输入手机号">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="text" v-model="formRegist.password" placeholder="请输入密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="confirmPw">
            <Input type="text" v-model="formRegist.confirmPw" placeholder="请输入确认密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <div class="text">
            <div class="pull-right">
              <!-- <a class="retrieve pointer" @click="changeLogin('4')">忘记密码?</a>
              <font>|</font>-->
              <a class="register pointer" @click="changeLogin(1)">登录</a>
            </div>
          </div>
          <Button type="primary" class="submit" @click="regist('formRegist')">注册</Button>
        </Form>
        <!-- 登录 -->
        <Form ref="formLogin" :model="formLogin" :rules="ruleLogin" v-show="loginType==1">
          <h1 class="title">登录</h1>
          <FormItem prop="mobile">
            <Input type="text" v-model="formLogin.mobile" placeholder="请输入手机号">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="text" v-model="formLogin.password" placeholder="请输入密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <div class="text">
            <div class="pull-right">
              <!-- <a class="retrieve pointer" @click="changeLogin('4')">忘记密码?</a>
              <font>|</font>-->
              <a class="register pointer" @click="changeLogin(0)">注册</a>
            </div>
          </div>
          <Button type="primary" class="submit" @click="login('formLogin')">登录</Button>
        </Form>
        <div class="radio-box">
          <RadioGroup v-model="userType">
            <Radio :label="Number(1)">用户</Radio>
            <Radio :label="Number(2)">管理员</Radio>
          </RadioGroup>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const validateMobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入手机号"));
      } else if (!/^1[13456789]\d{9}$/.test(value)) {
        return callback(new Error("手机号码格式不正确"));
      } else {
        return callback();
      }
    };
    const validate_confirm_pwd = () => {};
    return {
      userType: 1, //1用户 2管理员
      loginType: 1, // 0 注册 1 登录
      formRegist: {
        mobile: "",
        password: "",
        confirmPw: "",
      },
      ruleRegist: {
        mobile: [
          {
            required: true,
            trigger: "blur",
            validator: validateMobile,
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            messsage: "请输入密码",
          },
          {
            required: true,
            trigger: "blur",
            min: 6,
            message: "密码至少6位及以上",
          },
        ],
        confirmPw: [
          {
            required: true,
            trigger: "blur",
            validator: validate_confirm_pwd,
          },
        ],
      },
      formLogin: {
        mobile: "",
        password: "",
      },
      ruleLogin: {
        mobile: [
          {
            required: true,
            trigger: "blur",
            validator: validateMobile,
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            messsage: "请输入密码",
          },
          {
            required: true,
            trigger: "blur",
            min: 6,
            message: "密码至少6位及以上",
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    //点击注册
    regist(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
        }
      });
    },
    //点击登录
    login(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
        }
      });
    },
    // 切换登录注册
    changeLogin(type) {
      this.loginType = type;
    },
  },
};
</script>