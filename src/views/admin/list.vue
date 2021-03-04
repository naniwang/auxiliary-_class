<template>
  <div class="page-course-list">
    <Content style="background:#F5F7F9;">
      <Card shadow>
        <Button @click="addAdmin" type="primary">添加管理员</Button>
        <Table
          stripe
          class="goods-table m-t-md"
          :columns="columns"
          :data="tableData"
          :loading="loading"
        >
          <template slot-scope="{ row }" slot="statusSlot">
            <i-switch
              size="large"
              :value="row.status==1?true:false"
              @on-change="statusChange(row.id,$event)"
            >
              <span slot="open">在职</span>
              <span slot="close">离职</span>
            </i-switch>
          </template>
        </Table>
      </Card>
    </Content>
    <Modal
      v-model="addAdminShow"
      title="添加管理员"
      footer-hide
      :closable="true"
      :mask-closable="true"
      @on-cancel="handleReset('formValidate')"
    >
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem label="管理员姓名" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入管理员姓名" />
        </FormItem>
        <FormItem label="账户" prop="account">
          <Input v-model="formValidate.account" placeholder="请输入管理员账户" />
        </FormItem>
        <FormItem label="手机号" prop="mobile">
          <Input v-model="formValidate.mobile" placeholder="请输入管理员手机号" />
        </FormItem>
        <FormItem label="登录密码" prop="password">
          <Input v-model="formValidate.password" placeholder="请输入管理员登录密码" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">确定</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    const phoneValidate = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入手机号码"));
      } else if (!/^1[13456789]\d{9}$/.test(value)) {
        return callback(new Error("手机号码格式不正确"));
      } else {
        return callback();
      }
    };
    return {
      columns: [
        {
          title: "姓名",
          key: "name",
        },
        {
          title: "账户",
          key: "account",
        },
        {
          title: "手机号",
          key: "mobile",
        },
        {
          title: "在职状态",
          key: "status",
          slot: "statusSlot",
        },
      ],
      tableData: [],
      loading: true,
      params: {
        name: "",
      },
      addAdminShow: false,
      formValidate: {
        name: "",
        account: "",
        mobile: "",
        password: "",
        status: 1
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "请输入管理员姓名",
            trigger: "blur",
          },
        ],
        account: [
          {
            required: true,
            message: "请输入管理员账户",
            trigger: "blur",
          },
        ],
        mobile: [
          {
            required: true,
            validator: phoneValidate,
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入管理员登录密码",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            max: 32,
            message: "至少6位，最多32位密码！",
            trigger: "blur",
          },
        ],
      },
      repeatBool: true,
    };
  },
  created () {
    this.getList();
  },
  methods: {
    // 获取管理员列表
    getList () {
      this.$api
        .adminlist(this.params)
        .then((res) => {
          if (res.code == 200) {
            this.tableData = res.response;
            this.loading = false;
          } else {
            this.$Message.error(res.msg);
          }
        })
        .catch(() => {
          this.$Message.error("数据获取失败，请刷新重试！");
        });
    },
    //点击添加管理员
    addAdmin () {
      this.addAdminShow = true;
    },
    //设置管理员离职和在职
    statusChange (id, val) {
      this.$api
        .updateadminstatus({
          id: id,
          status: val ? 1 : 2,
        })
        .then((res) => {
          if (res.code == 200) {
            if (val) {
              this.$Message.success("已就职");
            } else {
              this.$Message.success("已离职");
            }
          }
        });
    },
    // 提交确定
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (!this.repeatBool) {
            return;
          }
          this.repeatBool = false;
          this.$api
            .addadmin(this.formValidate)
            .then((res) => {
              if (res.code == 200) {
                this.$Message.success("保存成功");
                this.handleReset(name);
                this.getList();
              } else {
                this.$Message.error(res.msg);
              }
              this.repeatBool = true;
            })
            .catch(() => {
              this.repeatBool = true;
            });
        }
      });
    },
    handleReset (name) {
      this.addAdminShow = false;
      this.$refs[name].resetFields();
    },
  },
};
</script>