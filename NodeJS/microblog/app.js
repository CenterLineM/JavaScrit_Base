var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var hello = require('./routes/hello');
var helper = require('./routes/helper');

var app = express();

// 使用layout
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts); // add this use()

// 載入 MongoDB 書上就有的 不可用
/*var MongoStore = require('connect-mongo');
var settings = require('./settings');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
	secret: settings.cookieSecret,
	store: new MongoStore({
		db:settings.db
	})
}));
app.use(app.router);
app.use(express.static(__dirname + '/public'));
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view options', { layout:'layout.ejs' });



// 修復
// 錯誤: Error: Failed to lookup view "error" in views directory "F:\shareFrome\WebDev\JavaScrit_Base\NodeJS\microblog\views"
// ✔ 成功
app.use(express.static(__dirname + '../public'));

// 修復錯誤嘗試
// Error: Failed to lookup view "error" in views directory
app.engine('ejs', require('ejs').renderFile);


// 試試看可不可用 ejs
//app.set('view engine', 'jade');
app.set('view engine', 'ejs');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/hello', hello);

// 路徑比對 新增

/**
app.get('/user/:username', function(req, res) {
	res.send('user: ' + req.params.username);
});
*/

// 控制權轉移範例
var users = {
		'byvoid': {
			name: 'Carbo',
			website: 'http://www.byvoid.com'
		}
};

app.all('/user/:username', function(req, res, next) {
	// 檢查使用者是否存在
	if (users[req.paramsname]) {
		next();
	} else {
		next(new Error(req.params.username + ' does not exist.'));
	}
});

app.get('/user/:username', function(req, res) {
	// 使用者一定存在 直接顯示
	res.send(JSON.stringify(users[req.params.username]));
});

app.put('/user/:username', function(req, res) {
	// 修改使用者資料
	res.send('Done');
});

// ⚠
// 部分視圖 範例
// 沒成功有錯誤發生
// Error: Failed to lookup view "error" in views directory
app.get('/list', function(req, res) {
	res.render('list', {
		title: 'List',
		item: [1991, 'byvoid', 'express', 'Node.js']
	});
});


// 視圖幫手


//⚠ 沒成功錯誤
/**
var helpers = require('express-helpers')(app);
var util = require('util');

app.helpers({
	inspect: function(obj) {
		return util.inspect(obj, true);
	}
});

app.dynamicHelpers({
	headers: function(req, res) {
		return req.headers;
	}
});

app.get('/helper', function(req, res) {
	res.render('helper', {
		title: 'Helper'
	});
});
*/


// 建立微網誌
// 路由規畫
// 成功修改
app.use('/u', index);
/*
app.post('/post', index.post);
app.use('/reg', index.reg);
app.post('/reg', index.doReg);
app.use('/login', index.login);
app.post('/login', index.doLogin);
app.use('/logout', index.logout);
*/




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
