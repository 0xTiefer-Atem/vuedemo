//使用CommonJs的模块化规范
const {add, mul} = require("./js/mathUtils.js")
console.log(add(20, 90));
console.log(mul(10, 34 ));


//使用ES6的模块化规范
import {name, height, age} from "./js/info";
console.log(name, height, age);


//依赖css文件
require('./css/normal.css')