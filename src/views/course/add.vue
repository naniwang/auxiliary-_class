<template>
  <div class="layout have-menu">
    <Menu mode="horizontal" active-name="1">
      <MenuItem name="1">添加 / 编辑课程</MenuItem>
    </Menu>
    <Content>
      <Card dis-hover class="m-t-md">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
          <FormItem label="课程号">
            <Input v-model="formValidate.course_no" style="width:300px" disabled="true"></Input>
          </FormItem>
          <FormItem label="课程名" prop="name">
            <Input v-model="formValidate.name" style="width:300px"></Input>
          </FormItem>
          <!--<FormItem label="所选课程" prop="course_id">
            <Select v-model="formValidate.course_id" multiple style="width:300px">
              <Option v-for="item in courseDrop" :value="item.id" :key="item.id">{{ item.name }}</Option>
            </Select>
          </FormItem>-->
        </Form>
        <div>
          <Button type="primary" @click="submit()">保存</Button>
        </div>
      </Card>
    </Content>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formValidate: {
        course_no: "",
        name: "",
        gender: 0,
        birthday: "",
        mobile: "",
        address: "",
        course_id: [],
      },
      ruleValidate: {},
      courseDrop: [],
    };
  },
  created () {
    if (this.$route.query.id) {
      this.getDetail()
    }
  },
  methods: {
    //保存
    submit () {
      this.$refs.formValidate.validate(valid => {
        if (valid) {
          this.$api.addcourse(this.formValidate).then(res => {
            if (res.code == 200) {
              this.$Message.success('保存成功')
              this.$router.replace({
                name: 'course-list'
              })
            } else {
              this.$Message.error(res.msg)
            }
          })
        }
      })
    },
    //获取详情
    getDetail () {
      this.$api.courseinfo(
        { id: this.$route.query.id }
      ).then(res => {
        if (res.code == 200) {
          this.formValidate = res.response
        } else {
          this.$Message.error(res.msg)
        }
      })
    }
  }
};
</script>