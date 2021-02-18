<template>
  <div>
    <div @click="score">成绩查询</div>
    <div @click="personal">个人信息</div>
  </div>
</template>
<script>
export default {
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