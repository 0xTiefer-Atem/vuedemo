const path = require('path');


module.exports = {
  //模块入口
  entry: './src/main.js',
  //模块导入出口
  output: {
    //path要动态获取文件绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};