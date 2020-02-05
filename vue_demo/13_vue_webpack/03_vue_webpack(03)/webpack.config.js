const path = require('path');


module.exports = {
  //模块入口
  entry: './src/main.js',
  //模块导入出口
  output: {
    //path要动态获取文件绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //资源公共前缀
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责将css文件加载
        //style-loader 负责将css添加到DOM中让其生效
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1300,
              name: 'img/[name][hash:8].[ext]'
            },

          }
        ]
      }
    ]
  }
};