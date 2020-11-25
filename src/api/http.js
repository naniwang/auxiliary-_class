import axios from 'axios';
import { reject, resolve } from 'core-js/fn/promise';
// import router from '../router/index';
// import store from '../vuex/store'

// axios 配置
axios.defaults.timeout = 500000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

export default{
  fetchPost:function(url,params,query){
    let urls=url;
    if(query){
      urls=url+'?'+query
    }else{
      urls=url
    }
    return new Promise((resolve,reject)=>{
      axios.post(url,params).then(response=>{
        resolve(response.data)
      },err=>{
        reject(err)
      }).catch(error=>{
        reject(error)
      })
    })
  },
  fetchGet:function(url,params,header){
    axios.get(url,{
      params:params,
      responseType:header?header.responseType:'json'
    }).then(response=>{
      resolve(response.data)
    },err=>{
      reject(err)
    }).catch(error=>{
      reject(error)
    })
  }
}