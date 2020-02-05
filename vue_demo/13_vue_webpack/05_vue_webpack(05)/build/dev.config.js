//开发需要的配置
//下载好后先引入，在使用

const WebpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports =new  WebpackMerge(baseConfig, {
  //运行名 webpack-dev-server
  devServer: {
    //监听的文件夹
    contentBase: './dist',

    //端口号
    // port: 8080,

    //页面时时刷新
    inline: true,

    //在SAP页面中，依赖HTML5的history模式
    // historyApiFallback() {
    // }
  }
});