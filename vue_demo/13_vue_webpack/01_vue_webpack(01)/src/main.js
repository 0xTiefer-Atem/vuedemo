//使用CommonJs的模块化规范
const {add, mul} = require("./mathUtils.js")

console.log(add(20, 90));
console.log(mul(10, 34 ));


//使用ES6的模块化规范
import {name, height, age} from "./info";

console.log(name, height, age);