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

// 下面的要改寫
module.exports.user = function(req, res) {
	
};

module.exports.post = function(req, res) {
	
};

module.exports.reg = function(req, res) {
	
};

module.exports.doReg = function(req, res) {
	
};


module.exports.login = function(req, res) {
	
};



module.exports.doLogin = function(req, res) {
	
};


module.exports.logout = function(req, res) {
	
};

module.exports = router;