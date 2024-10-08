const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const routerApi = require('./routes/index')

const app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const whitelist = [
  "http://localhost:4200"
  
];
const options = {
  // origin: (origin, callback) => {
  //     if (whitelist.includes(origin) || !origin) {
  //         callback(null, true);
  //     } else {
  //         callback(new Error('No permitido'));
  //     }
  // },
  origin: true,
  methods: ["POST","GET", "PATCH", "PUT", "OPTIONS","DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "Set-Cookie"]
};
app.use(cors(options));


// ROUTER
routerApi(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
