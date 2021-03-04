<template>
  <div class="personal-info-page">
    <studentHead></studentHead>
    <div class="page-box info-content">
      <Card>
        <table cellspacing="0" cellpadding="0" width="100%" class="table-info">
          <tbody>
            <tr>
              <td class="info-title">学号</td>
              <td>{{infoData.stu_no}}</td>
              <td class="info-title">姓名</td>
              <td>{{infoData.name}}</td>
            </tr>
            <tr>
              <td class="info-title">性别</td>
              <td></td>
              <td class="info-title">身份证号</td>
              <td></td>
            </tr>
            <tr>
              <td class="info-title">出生日期</td>
              <td></td>
              <td class="info-title">民族</td>
              <td></td>
            </tr>
            <tr>
              <td class="info-title">籍贯</td>
              <td></td>
              <td class="info-title">政治面貌</td>
              <td></td>
            </tr>
            <tr>
              <td class="info-title">出生地</td>
              <td></td>
              <td class="info-title">邮政编码</td>
              <td></td>
            </tr>
            <tr>
              <td class="info-title">联系人</td>
              <td></td>
              <td class="info-title">联系电话</td>
              <td></td>
            </tr>
            <tr>
              <td class="info-title">现住址</td>
              <td colspan="3"></td>
            </tr>
            <tr>
              <td class="info-title">辅修年级</td>
              <td></td>
              <td class="info-title">备注</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Card>
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
      infoData: {}
    }
  },
  created () {
    // this.getPersonInfo();
  },
  methods: {
    getPersonInfo () {
      this.$api.personalinfo().then(res => {
        if (res.code == 200) {
          this.infoData = res.response
        } else {
          this.$Message.error('信息获取失败，请稍后重试！')
        }
      })
    }
  }
}
</script>
<style lang="scss">
.personal-info-page {
  display: flex;
  justify-content: center;
  .info-content {
    margin-top: 70px;
    width: 80%;
    .table-info {
      user-select: none;
      border-width: 1px;
      margin: 0;
      background: #fff;
      border: 1px solid #e1e1e1;
      border-right: 0px;
      border-bottom: 0px;
      .bg-color {
        background: #f3f3f3 !important;
      }
      td {
        margin: 0;
        padding: 2px 10px;
        line-height: 26px;
        height: 28px;
        border-right: 1px solid #e1e1e1;
        border-bottom: 1px solid #e1e1e1;
        vertical-align: middle;
        // word-break: keep-all;
        word-break: break-all;
        overflow: hidden;
      }
      .info-title {
        width: 100px;
      }
    }
  }
}
</style>