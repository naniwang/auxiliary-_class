<template>
  <div class="page-course-list">
    <Content style="background:#F5F7F9;">
      <Card shadow>
        <Button @click="addCourse" type="primary">添加课程</Button>
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
          title: "课程号",
          key: "",
        },
        {
          title: "课程名",
          key: "",
        },
        {
          title: "学时",
          key: "",
        },
        {
          title: "教材",
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
                      this.editCourse(params.row.id);
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
                      this.delCourse(params.row.id);
                    },
                  },
                },
                "删除"
              ),
            ]);
          },
        },
      ],
      tableData: [],
      params: {
        name: "",
        course_no: "",
      },
      loading: true,
    };
  },
  methods: {
    // 获取课程列表
    getList() {
      this.$api.courselist(this.params).then((res) => {
        if (res.code == 200) {
          this.tableData = res.response;
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    //点击添加课程
    addCourse() {
      this.$router.push({
        name: "course-add",
      });
    },
    //点击编辑课程
    editCourse(id) {
      this.$router.push({
        name: "course-add",
        query: {
          id: id,
        },
      });
    },
    //点击删除课程
    delCourse(id) {
      this.$Modal.confirm({
        title: "提示",
        content: "确定删除该课程吗？",
        onOk: () => {
          this.$api
            .delcourse({
              id: id,
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
  },
};
</script>