<template>
  <div class="score-inquiry-page">
    <studentHead></studentHead>
    <div class="page-box sore-content">成绩</div>
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
      score: {}
    }
  },
  created () {
    // this.getScore();
  },
  methods: {
    getScore () {
      this.$api.inquirecorse().then(res => {
        if (res.code == 200) {
          this.score = res.response
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