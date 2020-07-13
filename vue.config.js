const path = require('path')
const webpack = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') //打包后可视化文件大小
const CircularDependencyPlugin = require('circular-dependency-plugin') //是否循环引用会报错
const TerserPlugin = require('terser-webpack-plugin') //代码压缩，生产环境自动删除console
const resolve = dir=> path.join(__dirname,dir)

const baseUrl = process.env.NODE_ENV === 'production' ? './': '/'
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
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 插件
      config.plugins.push(
        new BundleAnalyzerPlugin(),
        new TerserPlugin({
          cache:true,
          parallel:true,
          sourceMap:true,
          terserOptions:{
            compress: {
                drop_debugger: true,
                drop_console: true,
            },
        }
      }),
      // new CircularDependencyPlugin({
      //   exclude: /a\.js|node_modules/,
      //   failOnError: true,
      //   cwd: process.cwd()
      // }),
    )         
    }
    // Loader-rules为空或没有匹配到打包会报错
    config.module.rules.push(
       //图片压缩
      {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use:[{
          loader: 'image-webpack-loader',
          options: {bypassOnDebug: true}
      }]
      }
    )
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
