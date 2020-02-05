//小明的代码 1
var name = "小明";
var age = 18;
var flag = true
function sum(num1, num2){
  return num1 + num2
}

if(flag){
  console.log(sum(20, 30));
}

//ES6导出方式1
export {
  flag, sum
}

//ES6导出方式2
export var num = 999;
export var color = "red";

//导出函数/类
export function mul(num1, num2) {
  return num1 + num2
}

export class Person {
  run() {
    console.log("在奔跑");
  }
}

// export default
