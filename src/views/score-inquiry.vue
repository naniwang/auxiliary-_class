<template>
  <div class="score-inquiry-page">
    <studentHead></studentHead>
    <div class="page-box sore-content">
      <Table
        stripe
        class="goods-table m-t-md"
        :columns="columns"
        :data="tableData"
        :loading="loading"
      ></Table>
    </div>
  </div>
</template>
<script>
import studentHead from '@/components/student_head'
export default {
  components: {
    studentHead
  },
  data () {
    return {
      columns: [
        {
          title: '学科名称',
          key: ""
        },
        {
          title: '成绩',
          key: ""
        }
      ],
      tableData: [],
      loading: true
    }
  },
  created () {
    this.getScore();
  },
  methods: {
    getScore () {
      this.$api.inquirecorse({
        stu_no: this.$store.state.user.stu_no
      }).then(res => {
        if (res.code == 200) {
          // this.score = res.response
        } else {
          this.$Message.error(res.msg)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.score-inquiry-page {
  display: flex;
  justify-content: center;
  .sore-content {
    margin-top: 70px;
    width: 80%;
  }
}
</style>