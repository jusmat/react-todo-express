var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var router = require('./routes');

var app = express();
var compiler = webpack(config);

app.use('/', router);
app.use(express.static('public'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.set('views', './views')
app.set('view engine', 'jade');

app.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000');
});
