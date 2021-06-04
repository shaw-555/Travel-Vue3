// 2-79 行于2021年6月3日添加，用于实现数据mock
const path = require('path');
const proxy = require('http-proxy-middleware');
//const cityData = require('./static/mock/city.json');
const indexData = require('./static/mock/index.json');
const detailData = require('./static/mock/detail.json');
const goodsData = require('./mock/goods.json');
module.exports = {
  devServer: {
    // host: 'localhost',//target host
    // port: 8080,
    // // Paths
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true,
    //     ws:true,
    //     pathRewrite: {
    //       '^/api': '/static/mock'
    //     }
    //   }
    // }
    before (app) {
      app.get('/static/mock/city', (req, res) => {
        return res.json(cityData)
      });
      app.get('/static/mock/index', (req, res) => {
        return res.json(indexData.data)
      });
      app.get('/static/mock/detail', (req, res) => {
        return res.json(detailData)
      });
      app.get('/goods/total', (req, res) => {
        return res.json(goodsData)
      });
      app.get('/goods/list', (req, res) => {
        return res.json(goodsData.goodsList)
      });
      
    }
    
  }

  // build: {
  //   // Template for index.html
  //   index: path.resolve(__dirname, '../dist/index.html'),

  //   // Paths
  //   assetsRoot: path.resolve(__dirname, '../dist'),
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',

  //   /**
  //    * Source Maps
  //    */

  //   productionSourceMap: true,
  //   // https://webpack.js.org/configuration/devtool/#production
  //   devtool: '#source-map',

  //   // Gzip off by default as many popular static hosts such as
  //   // Surge or Netlify already gzip all static assets for you.
  //   // Before setting to `true`, make sure to:
  //   // npm install --save-dev compression-webpack-plugin
  //   productionGzip: false,
  //   productionGzipExtensions: ['js', 'css'],

  //   // Run the build command with an extra argument to
  //   // View the bundle analyzer report after build finishes:
  //   // `npm run build --report`
  //   // Set to `true` or `false` to always turn it on or off
  //   bundleAnalyzerReport: process.env.npm_config_report
  // }
}