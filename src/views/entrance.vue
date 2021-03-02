<template>
  <div class="entrance">
    <studentHead></studentHead>
    <div class="entrance-item" @click="score">
      <a>成绩查询</a>
    </div>
    <div class="entrance-item" @click="personal">
      <a>个人信息</a>
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
    return {}
  },
  methods: {
    score () {
      this.$router.push({
        name: 'score-inquiry'
      })
    },
    personal () {
      this.$router.push({
        name: 'personal-info'
      })
    }
  }
}
</script>
<style lang="scss">
.entrance {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .entrance-item {
    width: 300px;
    height: 200px;
    border: 1px solid #999;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    a {
      color: #333;
      border-bottom: 2px solid #666;
    }
    &:hover {
      a {
        color: #2d8cf0;
        border-color: #2d8cf0;
      }
    }
  }
}
</style>