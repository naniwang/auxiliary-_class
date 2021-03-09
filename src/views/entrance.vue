<template>
  <div class="entrance">
    <studentHead></studentHead>
    <div class="center-content">
      <div class="entrance-item" @click="score">
        <a>成绩查询</a>
      </div>
      <div class="entrance-item" @click="personal">
        <a>个人信息</a>
      </div>
      <div class="entrance-item" @click="rates">
        <a>收费标准</a>
      </div>
      <div class="entrance-item" @click="outing">
        <a>郊游</a>
      </div>
    </div>
    <!-- 收费标准弹窗 -->
    <rates v-model="ratesShow"></rates>
  </div>
</template>
<script>
import studentHead from '@/components/student_head'
import rates from '@/components/rates'
export default {
  components: {
    studentHead,
    rates
  },
  data () {
    return {
      ratesShow: false
    }
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
    },
    rates () {
      this.ratesShow = true
    },
    outing () {
      this.$router.push({
        name: 'Outing'
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
  .center-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 650px;
    .entrance-item {
      width: 300px;
      height: 200px;
      border: 1px solid #ccc;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      cursor: pointer;
      border-radius: 10px;
      a {
        color: #666;
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
}
</style>