const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {//一个入口一个结果，，公共依赖抽取 -> common.js  
    promotion: './src/promotion/index.js',
    pay: './src/pay/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    // new 一次  index.html
    new HtmlWebpackPlugin({
      template: './src/pay/index.html',
      filename:'pay.html',
      chunks: ['commons', 'pay']  //当前html引入的js代码块
    }),
    new HtmlWebpackPlugin({
      template: './src/promotion/index.html',
      filename:'promotion.html',
      chunks: ['commons','promotion']
    })
  ],
  optimization: {
    // 不同的规则 不同的抽离
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all', //同步，异步
          minChunks: 2, //最少引入2次
          minSize: 0  //只要引入  最小体积
        }
      }
    }
  }
}