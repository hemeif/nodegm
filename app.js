var express = require('express');
var middle = require('./middle/middle');


var app = express();
var path = require('path');
var multer = require('multer');
var favicon = require('serve-favicon');
var logger = require('morgan'); //日志
var cookieParser = require('cookie-parser'); //cookie
//处理post    req.body
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret:'blog',resave: false,
    saveUninitialized: true,}));
app.use(flash());
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, ""+Math.ceil(Math.random()*999)+new Date().getTime()+path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage });

//中间件
app.use(function (req,res,next) {
    app.locals.success = req.flash('success').toString();
    app.locals.error = req.flash('error').toString();

    app.locals.uid = req.session.uid;
    app.locals.user = req.session.username;
    app.locals.nickname = req.session.nickname;
    next();
});

var indexRoute = require('./routes/index');
var loginRoute = require('./routes/login');
var regRoute = require('./routes/reg');
var userRoute = require('./routes/user');
var addarticleRoute = require('./routes/addarticle');
var showRoute = require('./routes/show');
var categoryRoute = require('./routes/category');
var adminRoute = require('./routes/admin');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html',require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());




app.use('/', indexRoute);
app.use('/login',middle.isLogin, loginRoute);
app.use('/reg',middle.isLogin,regRoute);
app.use('/user',middle.isNotLogin,userRoute);
app.use('/addarticle',middle.isNotLogin,addarticleRoute);
app.use('/show',showRoute);
app.use('/category',categoryRoute);
app.use('/admin',adminRoute);
app.post('/uploads',upload.single('thumb'),function (req,res) {
    res.send("/upload/"+req.file.filename);
    // lcoalhost:9000/upload/123123213.png
})
app.get('/loginout',function (req,res) {
    req.flash('success',"退出成功");
    // req.session.destroy();
    req.session.uid = null;
    req.session.username = null;
    req.session.nickname = null;
    res.redirect('/');
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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
