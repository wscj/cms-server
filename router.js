const router = require('express').Router();

//请求出口
router.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  
});

//路由GET请求
router.post('/api/ajax', (req, res) => {
	res.send({ msg: 'You sent the message:' + req.body.sendMsg });
});

//路由POST请求
router.get('/api/ajax', (req, res) => {
	res.send({ msg: 'You sent the message:' + req.query.sendMsg });
});

module.exports = router;