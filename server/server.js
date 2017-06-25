var path = require('path')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../webpack.config')

//创建web服务
var app = new (require('express'))()
var port = 3000
//加入中间件
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

//设置路由，动态加载html文件
app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, '..') + '/app/index.html')
})


app.listen(port, function(error){
  if(error){
    console.log(error)
  }else{
    console.info("==> *   Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
