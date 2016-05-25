var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./api/models/db'); //bring db.js file into app
//required this file near top, so that the connection opens up early on in the app's life

var routes = require('./routes/index');
var routesApi = require('./api/routes/index');  //tell app that we are adding more routes to look out for
var routesBootstrap = require('./routes/bootstrap');
var users = require('./routes/users');
var routesTcs = require('./routes/tcs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('json spaces', 4);  //let API looks prettier

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'sc.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//below lines tell app to check server app routes for all incoming requests
//tell app when to use the routes
app.use('/', routes);
app.use('/users', users);
app.use('/bootstrap', routesBootstrap);
app.use('/api', routesApi);
app.use('/tcsweb', routesTcs);

//server static files under public folder
app.use(express.static('public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
