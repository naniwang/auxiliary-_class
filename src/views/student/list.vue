<template>
  <div class="page-course-list have-menu">
    <Content style="background:#F5F7F9;">
      <Menu mode="horizontal" :active-name="params.type" @on-select="getStuTypeList">
        <MenuItem name="1">一年级</MenuItem>
        <MenuItem name="2">二年级</MenuItem>
        <MenuItem name="3">三年级</MenuItem>
        <MenuItem name="4">四年级</MenuItem>
        <MenuItem name="5">五年级</MenuItem>
        <MenuItem name="6">六年级</MenuItem>
      </Menu>
      <Card shadow>
        <Button @click="addStudent" type="primary">添加学生</Button>
        <div class="pull-right">
          <Form :label-width="60" class="flex-set">
            <FormItem label="姓名">
              <Input
                v-model="params.name"
                placeholder="请输入学生姓名"
                style="width: 180px"
                class="m-r-sm"
              />
            </FormItem>
            <FormItem label="学号">
              <Input
                v-model="params.stu_no"
                placeholder="请输入学生学号"
                style="width: 180px"
                class="m-r-sm"
              />
            </FormItem>
            <FormItem :label-width="0">
              <Button @click="filter" type="primary">筛选</Button>
            </FormItem>
          </Form>
        </div>
        <Table
          stripe
          class="goods-table m-t-md"
          :columns="columns"
          :data="tableData"
          :loading="loading"
        ></Table>
      </Card>
    </Content>
    <Modal
      v-model="updatePwdShow"
      title="修改密码"
      footer-hide
      :closable="true"
      :mask-closable="true"
      @on-cancel="handleReset()"
    >
      <Form ref="formRef" :model="pwdData" :label-width="100">
        <FormItem
          label="新密码"
          prop="password"
          :rules="[{ required: true, trigger: 'blur', message: '请输入新密码' }, { required: true, trigger: 'blur', min: 6, max: 32, message: '请输入6~32位密码' }]"
        >
          <Input type="text" v-model="pwdData.password" placeholder="请输入新密码" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit()">确定</Button>
          <Button @click="handleReset()" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {
          title: "学号",
          key: "stu_no",
        },
        {
          title: "姓名",
          key: "name",
        },
        {
          title: "性别",
          key: "gender",
        },
        {
          title: "联系电话",
          key: "mobile",
        },
        {
          title: "联系地址",
          key: "address",
        },
        {
          title: "所选课程",
          key: "",
        },
        {
          title: "所在班级",
          key: "",
        },
        {
          title: "操作",
          key: "action",
          width: 230,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      this.editStudent(params.row.stu_no);
                    },
                  },
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      this.delStudent(params.row.stu_no);
                    },
                  },
                },
                "删除"
              ),
              h(
                "Button",
                {
                  props: {
                    size: "small",
                  },
                  style: {
                    // marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      this.updatePwdBtn(params.row.stu_no);
                    },
                  },
                },
                "修改密码"
              ),
            ]);
          },
        },
      ],
      tableData: [],
      params: {
        name: "",
        stu_no: "",
        type: '1'
      },
      loading: true,
      updatePwdShow: false,
      pwdData: {
        stu_no: '',
        password: ''
      },
    };
  },
  created () {
    this.getList()
  },
  methods: {
    // 获取学生列表
    getList () {
      this.$api.studentlist(this.params).then((res) => {
        if (res.code == 200) {
          this.tableData = res.response;
          this.loading = false;
        } else {
          this.$Message.error(res.msg);
        }
      }).catch(() => {
        this.$Message.error('数据获取失败，请稍后重试！');
      });
    },
    // 点击选项卡
    getStuTypeList (type) {
      this.tableData = []
      this.params.type = type;
      this.getList()
    },
    // 点击筛选
    filter () {
      this.getList()
    },
    //点击添加学生
    addStudent () {
      this.$router.push({
        name: "student-add",
        query: {
          type: this.params.type
        }
      });
    },
    //点击编辑学生
    editStudent (stu_no) {
      this.$router.push({
        name: "student-add",
        query: {
          stu_no: stu_no,
        },
      });
    },
    //点击删除学生
    delStudent (stu_no) {
      this.$Modal.confirm({
        title: "提示",
        content: "确定删除该学生吗？",
        onOk: () => {
          this.$api
            .delstudent({
              stu_no: stu_no,
            })
            .then((res) => {
              if (res.code == 200) {
                this.$Message.success("删除成功");
                this.getList();
              } else {
                this.$Message.error("删除失败");
              }
            });
        },
      });
    },
    //修改密码
    updatePwdBtn (stu_no) {
      this.updatePwdShow = true;
      this.pwdData.stu_no = stu_no;
    },
    // 弹窗确定
    handleSubmit () {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          this.$api.updatestudentpwd(this.pwdData).then(res => {
            if (res.code == 200) {
              this.$Message.success('修改成功')
              this.handleReset()
            } else {
              this.$Message.error(res.msg)
            }
          })
        }
      })
    },
    // 弹窗取消
    handleReset () {
      this.updatePwdShow = false;
      this.$refs.formRef.resetFields()
    }
  },
};
</script>