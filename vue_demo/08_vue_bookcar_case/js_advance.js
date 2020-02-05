// 编程范式: 命令式编程/声明式编程
// 编程范式: 面向对象编程(第一公民: 对象)/函数式编程(第一公民: 函数)
//三个高阶函数: filter/map/reduce
//js高阶函数的使用


// filter函数的使用
//filter中的回调函数有一个要求: 必须返回一个boolean值
//当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//当返回false时，函数内部会自动过滤掉这次的n
// const nums = [30, 40, 111, 222, 333, 68, 89]

// let newNums1 = nums.filter(function(n){
//   return n < 100
// });
// console.log(newNums1);

// map函数的使用
// let new2Nums = newNums1.map(function(n){
//   return n*2;
// });
// console.log(new2Nums);


//3. reduce函数的使用
// 对数组中所有的内容进行汇总
// let total = new2Nums.reduce(function (preValue , n) {
//   return preValue + n;
// }, 0);
// console.log(total);


//1. 需求: 取出所有小于100的数字
// let newNums = []
// for (let n of nums) {
//   if(n < 100){
//     newNums.push(n)
//   }
// }


//2.  需求: 将所有小于100的数字进行转化, 全部*2
// for (let i = 0; i < newNums.length; i++) {
//   newNums[i] = newNums[i]*2
// }
// console.log(newNums);

//3. 需求: 将newNums中的元素相加得到最终结果