import {
  format
} from 'timeago.js';

let filter = {};

// 判断按钮是否有点击权限
filter.isBtnPower = (val, bb) => {
  let beforePower = localStorage.getItem('power');
  let isShow = false;
  if (beforePower) {
    beforePower = JSON.parse(beforePower);
    isShow = beforePower.operate.indexOf(val) > -1;
  }
  return isShow;
};

//timeago处理时间
filter.timeAgo = (val) => {
  return format(val, 'zh_CN'); //转换成类似于几天前的格式
};

filter.dateFormat = (val, fmt) => { // author: meizz
  // var date = new Date(val);
  // var seperator1 = "-";
  // var year = date.getFullYear();
  // var month = date.getMonth() + 1;
  // var strDate = date.getDate();
  // if (month >= 1 && month <= 9) {
  //     month = "0" + month;
  // }
  // if (strDate >= 0 && strDate <= 9) {
  //     strDate = "0" + strDate;
  // }
  // var currentdate = year + seperator1 + month + seperator1 + strDate;
  // return currentdate;

  // 对Date的扩展，将 Date 转化为指定格式的String
  // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
  // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
  // 例子：
  // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
  // (new Date()).Format("yyyy-M-d datetimeh:m:s.S")      ==> 2006-7-2 8:9:4.18
  if (val === '' || val == null) {
    return '';
  }
  var date;
  if (typeof val === 'string') {
    val = val.replace(/\.\d+/, ''); // remove milliseconds
    val = val.replace(/-/, '/').replace(/-/, '/');
    val = val.replace(/T/, ' ').replace(/Z/, ' UTC');
    val = val.replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2'); // -04:00 -> -0400
    val = val.replace(/([\+\-]\d\d)$/, ' $100'); // +09 -> +0900
    date = new Date(val);
  } else {
    date = val;
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.leng09th == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
};

filter.dateToString = (date, fmt) => {
  let ret;
  let opt = {
    'y+': date.getFullYear().toString(), // 年
    'M+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'h+': date.getHours().toString(), // 时
    'm+': date.getMinutes().toString(), // 分
    's+': date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
    }
  }
  return fmt;
};

filter.setImgUrl = (imgUrl, type, size) => {
  if (imgUrl) {
    if (imgUrl.indexOf('?imageView') != '-1' || imgUrl.indexOf('data:image') != '-1') {
      return imgUrl;
    }
    var imageView2 = '?imageView2/2/w/730/h/0/format';
    switch (size) {
      case 1: //头像
        imageView2 = '?imageView2/1/w/100/h/100/format';
        break;
      case 2: //小头像
        imageView2 = '?imageView2/1/w/200/h/200/format';
        break;
      case 3: //小头像
        imageView2 = '?imageView2/1/w/300/h/300/format';
        break;
      case 5:
        imageView2 = '?imageView2/1/w/500/h/500/format';
        break;
      case 4:
        imageView2 = '?imageView2/1/w/1080/h/540/format';
        break;
      case 8:
        imageView2 = '?imageView2/2/w/800/h/800/format';
        break;
      case 58:
        imageView2 = '?imageView2/2/w/58/h/58/format';
        break;
      case 64:
        imageView2 = '?imageView2/2/w/64/h/64/format';
        break;
      case 105:
        imageView2 = '?imageView2/2/w/105/h/105/format';
        break;
      case 300:
        imageView2 = '?imageView2/2/w/300/h/0/format';
        break;
      case 520:
        imageView2 = '?imageView2/2/w/520/h/0/format';
        break;
      default:
        imageView2 = '?imageView2/2/w/730/h/0/format';
        break;
    }
    imgUrl = imgUrl + imageView2;
    // imgUrl = true ? imgUrl + '/webp' : +'/jpg'
  } else if (type == 'avatar') {
    imgUrl = 'http://image.renzhichu.top/1a7299ca608e43beb568dab54a64215b';
  } else if (type == 'goods') {
    imgUrl = 'http://img.jishuibao.net/b6847a322981490b80cce76a28f8a431';
  } else if (type == 'shop') {
    imgUrl = 'http://img.jishuibao.net/9977db1be5744ab285d332c3ec1a5614';
  } else {
    imgUrl = 'http://img.jishuibao.net/72fda1f371874bc8854f923ed0c102a9';
  }
  return imgUrl;
};
export default filter;