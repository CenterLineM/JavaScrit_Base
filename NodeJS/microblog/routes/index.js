var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// 增加對應函數

router.get('/u', function(req, res, next) {
	res.send('respond with a resource');
});

// 路由貴畫

module.exports = function(app) {
	app.get('/reg', function (req, res) {
		res.render('reg', {title : '註冊'});
	});
	
	app.post('reg', function (req, res) {
		
	});
}




//檢查使用者登入狀態


// 已登入使用這 首頁 顯示




// 註冊使用者


// 註冊 行為




// 登入實作
router.get('/login', function(req, res, next) { 
	
});




// 下面的要改寫

module.exports = router;