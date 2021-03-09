<template>
  <div class="score-page">
    <Content style="background:#F5F7F9;">
      <Card shadow>
        <Button @click="addScore" type="primary">录入成绩</Button>
        <div class="pull-right">
          <Form :label-width="60" class="flex-set">
            <FormItem label="姓名">
              <Input
                v-model="params.name"
                placeholder="请输入学生姓名"
                style="width: 180px"
                class="m-r-sm"
              />
            </FormItem>
            <FormItem label="学号">
              <Input
                v-model="params.stu_no"
                placeholder="请输入学生学号"
                style="width: 180px"
                class="m-r-sm"
              />
            </FormItem>
            <FormItem :label-width="0">
              <Button @click="filter" type="primary">筛选</Button>
            </FormItem>
          </Form>
        </div>
        <Table
          stripe
          class="goods-table m-t-md"
          :columns="columns"
          :data="tableData"
          :loading="loading"
        ></Table>
      </Card>
    </Content>
    <Modal
      v-model="addScoreShow"
      title="成绩录入"
      footer-hide
      :closable="true"
      :mask-closable="true"
      @on-cancel="handleReset('formValidate')"
    >
      <Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="100">
        <FormItem label="学号" prop="stu_no">
          <Input v-model="formData.stu_no" placeholder="请输入学生学号" />
        </FormItem>
        <FormItem label="姓名" prop="name">
          <Input v-model="formData.name" placeholder="请输入学生姓名" />
        </FormItem>
        <FormItem label="学科" prop="score">
          <div class="subject-score" v-for="(it,index) in formData.score" :key="index">
            <AutoComplete
              class="subject-name"
              v-model="it.name"
              :data="subjectName"
              placeholder="请选择学科"
            ></AutoComplete>
            <Input class="score-input" v-model="it.score" placeholder="请输入该学科成绩" />
            <a @click="removeItem(index)">移除</a>
          </div>
          <div class="add-subject" @click="addSubject()">添加学科 +</div>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">确定</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {
          title: "学号",
          key: ""
        },
        {
          title: "姓名",
          key: ""
        },
        {
          title: "成绩",
          key: ""
        },
        {
          title: "操作",
          key: "action",
          render: (h, params) => {
            return h('dev', [
              h('Button', {
                props: {
                  size: 'small'
                },
                style: {
                  marginRight: "5px"
                },
                on: {
                  click: () => {
                    this.editScore(params.row.stu_no)
                  }
                }
              }, '编辑'),
              h('Button', {
                props: {
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.delScore(params.row.stu_no)
                  }
                }
              }, '编辑')
            ])
          }
        }
      ],
      tableData: [],
      loading: true,
      params: {
        name: "",
        stu_no: ''
      },
      addScoreShow: false,
      formData: {
        stu_no: '',
        name: '',
        score: []
      },
      ruleValidate: {
        stu_no: [
          {
            required: true,
            trigger: 'blur',
            message: "学号不能为空"
          }
        ],
        name: [
          {
            required: true,
            trigger: 'blur',
            message: "请输入学生姓名"
          }
        ],
        score: [
          {
            required: true,
            trigger: 'blur',
            message: "请添加学科成绩",
            type: 'array'
          }
        ]
      },
      subjectName: [
        '语文',
        '数学',
        '英语'
      ]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 获取学生成绩列表
    getList () {
      this.$api.scorelist(this.params).then((res) => {
        if (res.code == 200) {
          this.tableData = res.response;
          this.loading = false;
        } else {
          this.$Message.error(res.msg);
        }
      }).catch(() => {
        this.$Message.error('数据获取失败，请稍后重试！');
      });
    },
    //点击增加学科按钮
    addSubject () {
      this.formData.score.push({
        name: '',
        score: null
      })
    },
    //移除学科项
    removeItem (index) {
      this.formData.score.splice(index, 1)
    },
    //弹窗确定按钮
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          for (let i = 0; i < this.formData.score.length; i++) {
            if (!this.formData.score[i].name) {
              return this.$Message.warning('学科名称不能为空')
            }
            if (!this.formData.score[i].score) {
              return this.$Message.warning('学科成绩不能为空')
            }
          }
          this.$api.addscore(this.formData).then(res => {
            if (res.code == 200) {
              this.$Message.success('保存成功')
              this.handleReset(name)
              this.getList();
            } else {
              this.$Message.error(res.msg)
            }
          })
        }
      })
    },
    //关闭弹窗
    handleReset (name) {
      this.addScoreShow = false;
      this.$refs[name].resetFields();

    },
    // 点击筛选
    filter () {
      this.getList()
    },
    //点击录入成绩 
    addScore () {
      this.addScoreShow = true;
    },
    //点击编辑
    editScore (stu_no) { },
    //点击删除
    delScore (stu_no) {
      this.$Modal.confirm({
        title: "提示",
        content: "确定删除该学生的成绩吗？",
        onOk: () => {
          this.$api.deletescroe({
            stu_no: stu_no
          }).then(res => {
            if (res.code == 200) {
              this.$Message.success('删除成功')
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
<style lang="scss">
.subject-score {
  display: flex;
  align-items: center;
  width: 400px;
  position: relative;
  margin-bottom: 10px;
  .subject-name {
    width: 100px;
  }
  .score-input {
    width: 200px;
    margin: 0 10px;
  }
}
.add-subject {
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: 1px dashed #999;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
</style>