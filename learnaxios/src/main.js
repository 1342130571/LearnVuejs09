import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios({
  url: 'http://123.207.32.32:7888/home/multidata',
  // method: 'POST'
}).then(res => {
  console.log(res)
})

axios({
  url: 'http://123.207.32.32:7888/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})