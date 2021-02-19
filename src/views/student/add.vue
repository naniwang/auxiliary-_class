<template>
  <div class="layout have-menu">
    <Menu mode="horizontal" active-name="1">
      <MenuItem name="1">添加 / 编辑学生</MenuItem>
    </Menu>
    <Content>
      <Card dis-hover class="m-t-md">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
          <FormItem label="学号" v-if="$route.query.stu_no">
            <Input v-model="formValidate.stu_no" style="width:300px" :disabled="true"></Input>
          </FormItem>
          <FormItem label="姓名" prop="name">
            <Input v-model="formValidate.name" style="width:300px"></Input>
          </FormItem>
          <FormItem label="性别">
            <RadioGroup v-model="formValidate.gender">
              <Radio :label="Number(1)">男</Radio>
              <Radio :label="Number(2)">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="出生日期">
            <DatePicker
              type="date"
              :editable="false"
              placeholder="出生日期"
              format="yyyy-MM-dd"
              v-model="formValidate.birthday"
              style="width:300px"
            ></DatePicker>
          </FormItem>
          <FormItem label="联系电话" prop="mobile">
            <Input v-model="formValidate.mobile" style="width:300px"></Input>
          </FormItem>
          <FormItem label="联系地址" prop="address">
            <Input v-model="formValidate.address" style="width:300px"></Input>
          </FormItem>
          <FormItem label="所选课程" prop="course_id">
            <Select v-model="formValidate.course_id" multiple style="width:300px">
              <Option v-for="item in courseDrop" :value="item.id" :key="item.id">{{ item.name }}</Option>
            </Select>
          </FormItem>
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
        stu_no: "",
        name: "",
        gender: 1,
        birthday: "",
        mobile: "",
        address: "",
        course_id: [],
      },
      ruleValidate: {
        name: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入姓名'
          }
        ]
      },
      courseDrop: [],
    };
  },
  created () {
    if (this.$route.query.stu_no) {
      this.getDetail()
    }
  },
  methods: {
    //保存
    submit () {
      this.$refs.formValidate.validate(valid => {
        if (valid) {
          this.$api.addstudent(this.formValidate).then(res => {
            if (res.code == 200) {
              this.$Message.success('保存成功')
              this.$router.replace({
                name: 'student-list'
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
      this.$api.studentinfo(
        { stu_no: this.$route.query.stu_no }
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