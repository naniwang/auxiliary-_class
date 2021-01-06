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
  </div>
</template>
<script>
export default {
  data() {
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
                      this.delStudent(params.row.id);
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
                      this.updatePwd(params.row.id);
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
      },
      loading: true,
    };
  },
  methods: {
    // 获取课程列表
    getList() {
      studentlist().then((res) => {
        if (res.code == 200) {
          this.tableData = res.response;
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    //点击添加学生
    addStudent() {},
    //点击编辑学生
    editStudent(id) {},
    //点击删除学生
    delStudent(id) {
      this.$Modal.confirm({
        title: "提示",
        content: "确定删除该学生吗？",
        onOk: () => {},
      });
    },
    //修改密码
    updatePwd(id) {},
  },
};
</script>