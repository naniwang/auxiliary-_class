<template>
  <div class="page-course-list">
    <Content>
      <Card shadow>
        <Table stripe :columns="columns" :data="courseData"></Table>
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
        },
      ],
      courseData: [],
    };
  },
};
</script>