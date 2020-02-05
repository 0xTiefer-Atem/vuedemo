//小明代码 2

//导入{}对象中定义的变量
import {flag,sum} from "./index(01).js";

if(flag){
  console.log("小明真帅，哈哈哈");
  console.log(sum(100, 34));
}


//直接导入export定义的变量
import {num} from "./index(01).js";

//导入export的function
import {mul, Person} from "./index(01).js";
console.log(mul(20, 10));
let p = new Person();
p.run()


