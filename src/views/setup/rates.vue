<template>
  <div class="layout have-menu">
    <Menu mode="horizontal" active-name="1">
      <MenuItem name="1">设置收费标准</MenuItem>
    </Menu>
    <Content>
      <Card dis-hover class="m-t-md">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
          <FormItem label="收费标准" prop="standard">
            <Input
              type="textarea"
              :rows="30"
              v-model="formValidate.standard"
              placeholder="请输入收费标准"
              style="width:600px"
            />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="submit()">保存</Button>
          </FormItem>
        </Form>
      </Card>
    </Content>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formValidate: {
        standard: ""
      },
      ruleValidate: {
        standard: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入收费标准'
          }
        ]
      }
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    // 获取收费标准详情
    getDetail () {
      this.$api.getrates().then(res => {
        if (res.code == 200) {
          if (Object.keys(res.response).length > 0) {
            this.formValidate = res.response
          }
        }
      })
    },
    //保存
    submit () {
      this.$refs.formValidate.validate(valid => {
        if (valid) {
          this.$api.setrates(this.formValidate).then(res => {
            if (res.code == 200) {
              this.$Message.success('保存成功')
            } else {
              this.$Message.error(res.msg)
            }
          })
        }
      })
    }
  }
}
</script>