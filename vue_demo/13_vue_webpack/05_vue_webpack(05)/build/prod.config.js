//生产需要的配置
//下载好后先引入，在使用

const WebpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config');

module.exports = new WebpackMerge(baseConfig, {
  plugins: [
      //压缩js文件减小文件大小
    new UglifyJsPlugin(),
  ],
});