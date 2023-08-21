import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:7888/home/multidata',
//   // method: 'POST'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:7888/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// // 2.axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:7888/home/multidata'
// }),axios({
//   url: 'http://123.207.32.32:7888/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// })]).then(res => {
//  console.log(res);
//  console.log(res[0]);
//  console.log(res[1]);
// })

// // 3.使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:7888';
// // 请求5秒内未响应返回错误信息
// axios.defaults.timeout = 5000;

// axios.all([axios({
//   url: '/home/multidata'
// }),axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
//   // axios.spread 可将并发数组展开
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 4.创建对应的axios实例对象
// // 创建instance1实例对象
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// // 创建instance2实例对象
// const instance2 = axios.create({
//   baseURL: 'http://123.207.32.32:7888',
//   timeout: 5000
// })

// instance2({
//   url: 'api/hy66/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   } 
// }).then(res => {
//   console.log(res)
// })

// 5.封装request的网络请求模块
import { request } from './network/request'

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err)
// })

// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function() {

//   },
//   failure: function() {

//   }
// })

request({
  url: '/home/multidata',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})