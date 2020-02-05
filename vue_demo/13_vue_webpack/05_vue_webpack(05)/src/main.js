//使用CommonJs的模块化规范
const {add, mul} = require("./js/mathUtils.js")
console.log(add(20, 90));
console.log(mul(10, 34 ));


//使用ES6的模块化规范
import {name, height, age} from "./js/info";
console.log(name, height, age);


//依赖css文件
require('./css/normal.css')

//使用vue进行开发,进行代码抽取
import Vue from 'vue'

// import App from './vue/app'

import App from "./vue/App.vue";
new Vue({
  el: '#app',
  template: '<App></App>',
  data: {

  },
  components: {
    App
  }
})
document.write("<span>hahaha</span>");
