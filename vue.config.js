const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin"); //代码压缩，生产环境自动删除console
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer') //打包后可视化文件大小
// const CircularDependencyPlugin = require('circular-dependency-plugin') //是否循环引用会报错
const resolve = (dir) => path.join(__dirname, dir);
const px2rem = require('postcss-px2rem');
const postcss = px2rem({
  remUnit: 37.5, //设计图尺寸
});
const Timestamp = new Date().getTime();
const baseUrl = process.env.NODE_ENV === "production" ? "./" : "/";
module.exports = {
  // 基本路径
  publicPath: baseUrl,
  // 输出文件目录
  outputDir: "pan_" + process.env.VUE_APP_MODE.trim(),
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // webpack-dev-server 相关配置
  devServer: {
    disableHostCheck: true,
    open: true,
    // host: "localhost",
    port: 8090,
    https: false,
    hotOnly: true,
    // 设置代理
    proxy: {
      "/api": {
        target: "https://apis.map.qq.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  },
  configureWebpack: {
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${Timestamp}.js`,
      chunkFilename: `js/[name].${Timestamp}.js`
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
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
    ],
    module: {
      rules: [
        //图片压缩
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use: [{
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            },
          }, ],
        },
      ],
    },
    // 在这里配置后，减少了压缩的包内容，需要在public/index.html通过cdn方式再引入,注意对应的版本
    externals: {
      // vue: "Vue",
    },
  },
  // 第三方插件配置
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: ["./src/assets/css/public.less"],
    },
  },
  chainWebpack: (config) => {
    // 解决动态加载组件出现循环依赖的问题
    config.plugin("html").tap((args) => {
      args[0].chunksSortMode = "none";
      return args;
    });
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@c", resolve("src/components"));
  },
  productionSourceMap: false, //打包不生成.map文件
};