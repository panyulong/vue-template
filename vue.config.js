const path = require('path')
const webpack = require('webpack')
const resolve = dir=> path.join(__dirname,dir)

let baseUrl = '/vue-template/'
module.exports = {
  // 基本路径
  publicPath: baseUrl,
  // 输出文件目录
  outputDir: 'pan_'+process.env.VUE_APP_MODE.trim(),
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: 'localhost',
    port: 8090,
    https: false,
    hotOnly: true,
     // 设置代理
    proxy: {
        '/api':{
          target:'http://localhost:8080',
          ws:true,
          changeOrigin:true,
          pathRewrite: {
            '^/api': '/' 
          }
        }
    },
  },
  // 第三方插件配置
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: ["./src/assets/css/public.less"]
   }
  },
  chainWebpack:config=>{
      // 解决动态加载组件出现循环依赖的问题
      config.plugin('html').tap(args => {
        args[0].chunksSortMode = 'none'
        return args
      })
    config.resolve.alias
    .set('@',resolve('src'))
    .set('@c',resolve('src/components'))
  },
  productionSourceMap:false, //打包不生成.map文件
}
