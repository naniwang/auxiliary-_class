const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  // baseUrl: '/admin',
  publicPath: './',
  // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  outputDir: 'dist',
  // 指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  indexPath: 'index.html',
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'));
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    // // 环境配置
    port: 5050,
    proxy: {
      '/api': {
        target: 'http://localhost:3333', //API服务器的地址
        ws: false, //代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: {
          '^api': '/'
        }
      }
    },
  }
};