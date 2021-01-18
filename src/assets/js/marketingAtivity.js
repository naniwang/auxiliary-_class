// import api from '../../api/api';
import {
  IsDefine
} from '../../libs/tools';

// 过滤时间格式为 年-月-日 时：分：秒
class filterTime {
  parseTime(d) {
    if (!IsDefine(d)) {
      return '';
    }
    if (typeof d === 'string') {
      return d;
    }
    var month = '',
      date = '',
      hours = '',
      minutes = '',
      seconds = '';
    if (d.getMonth() + 1 < 10) {
      month = '0' + (d.getMonth() + 1);
    } else {
      month = d.getMonth() + 1;
    }
    if (d.getDate() < 10) {
      date = '0' + d.getDate();
    } else {
      date = d.getDate();
    }
    if (d.getHours() < 10) {
      hours = '0' + d.getHours();
    } else {
      hours = d.getHours();
    }
    if (d.getMinutes() < 10) {
      minutes = '0' + d.getMinutes();
    } else {
      minutes = d.getMinutes();
    }
    if (d.getSeconds() < 10) {
      seconds = '0' + d.getSeconds();
    } else {
      seconds = d.getSeconds();
    }
    const newDate = d.getFullYear() + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
    return newDate;
  }
  constructor() {
    (this.goodArr = []), (this.type = '');
  }
  getsuperactivitystatus(vueInstance, goodArr, type) {
    //根据店铺Id和商品Id获取活动信息
    let arr = '';
    vueInstance.goodArr = goodArr;
    vueInstance.type = type;
    for (let i = 0; i < goodArr.length; i++) {
      if (arr == '') {
        arr = goodArr[i].id;
      } else {
        arr = arr + ',' + goodArr[i].id;
      }
    }
    // api
    //   .getsuperactivitystatus({
    //     ids: arr.toString(),
    //     identify: type,
    //   })
    //   .then(function(res) {
    //     // console.log(res)
    //     if (res.code == '200') {
    //       for (let i = 0; i < res.response.length; i++) {
    //         if (res.response[i].activity_type == 0) {
    //           vueInstance.$set(goodArr[i], 'status', '可选取');
    //           vueInstance.$set(goodArr[i], 'button', 'primary');
    //         }
    //         if (res.response[i].activity_type == 2) {
    //           vueInstance.$set(goodArr[i], 'status', '参与秒杀中...');
    //           vueInstance.$set(goodArr[i], 'button', 'dashed');
    //         }
    //         if (res.response[i].activity_type == 3) {
    //           vueInstance.$set(goodArr[i], 'status', '参与拼团中...');
    //           vueInstance.$set(goodArr[i], 'button', 'dashed');
    //         }
    //         if (res.response[i].activity_type == 8) {
    //           vueInstance.$set(goodArr[i], 'status', '参与砍价中...');
    //           vueInstance.$set(goodArr[i], 'button', 'dashed');
    //         }
    //       }
    //     } else {
    //       vueInstance.$Message.error(res.msg);
    //     }
    //   });
  }
}

export default new filterTime();