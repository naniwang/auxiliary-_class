<template>
  <div class="page-course-list">
    <Content style="background:#F5F7F9;">
      <Card shadow>
        <Button @click="addStudent" type="primary">添加学生</Button>
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
      @on-cancel="handleReset('formRef')"
    >
      <Form ref="formRef" :label-width="100">
        <FormItem label="新密码">
          <Input
            type="text"
            v-model="password"
            :rules="[{required:true,trigger:'blur',message:'请输入新密码'},{required:true,trigger:'blur',min: 6, max:32,message:'请输入6~32位密码'}]"
            placeholder="请输入新密码"
          />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formRef')">确定</Button>
          <Button @click="handleReset('formRef')" style="margin-left: 8px">取消</Button>
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
          key: "",
        },
        {
          title: "姓名",
          key: "",
        },
        {
          title: "性别",
          key: "",
        },
        {
          title: "联系电话",
          key: "",
        },
        {
          title: "联系地址",
          key: "",
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
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  prop: {
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      this.editStudent(params.row.id);
                    },
                  },
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  prop: {
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
                  prop: {
                    size: "small",
                  },
                  style: {
                    marginRight: "5px",
                  },
                  on: {
                    click: () => {
                      this.updatePwd(params.row.stu_no);
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
      },
      loading: true,
      updatePwdShow: false,
      password: ''
    };
  },
  created () {
    this.getList()
  },
  methods: {
    // 获取学生列表
    getList () {
      let res = this.$api.studentlist(this.params).then((res) => {
        if (res.code == 200) {
          this.tableData = res.response;
        } else {
          this.$Message.error(res.msg);
        }
      }).catch(() => {
        this.$Message.error('请求失败');
      });
    },
    //点击添加学生
    addStudent () {
      this.$router.push({
        name: "student-add",
      });
    },
    //点击编辑学生
    editStudent (id) {
      this.$router.push({
        name: "student-add",
        query: {
          id: id,
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
      this.stu_no = stu_no;
    },
    // 弹窗确定
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$api.updatestudentpwd({
            stu_no: this.stu_no,
            password: this.password
          }).thens(res => {
            if (res.code == 200) {
              this.$Message.success('修改成功')
              this.handleReset(name)
            } else {
              this.$Message.error(res.msg)
            }
          })
        }
      })
    },
    // 弹窗取消
    handleReset (name) {
      this.updatePwdShow = false;
      this.$refs[name].resetFields()
    }
  },
};
</script>