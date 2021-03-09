<template>
  <div>
    <Modal
      v-model="ratesShow"
      title="收费标准"
      footer-hide
      :closable="true"
      :mask-closable="true"
      @on-visible-change="changeFn"
    >
      <Content>
        <Card>
          <div>{{standard}}</div>
        </Card>
      </Content>
    </Modal>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean
    }
  },
  data () {
    return {
      ratesShow: false,
      standard: ""
    }
  },
  watch: {
    value: {
      handler (val) {
        this.ratesShow = val
        if (val) {
          this.getDetail()
        }
      }
    }
  },
  created () {
    // this.getDetail()
  },
  methods: {
    // 获取收费标准详情
    getDetail () {
      this.$api.getrates().then(res => {
        if (res.code == 200) {
          if (Object.keys(res.response).length > 0) {
            this.standard = res.response.standard
          }
        }
      })
    },
    // 子组件向父组件传值
    changeFn (isShow) {
      this.$emit('input', isShow)
    }
  }
}
</script>