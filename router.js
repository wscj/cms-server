const router = require('express').Router();

router.use(function(req, res, next) {

  //允许跨域
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

//用户登录
router.get('/api/login', (req, res) => {
  const md5 = require('md5');

  if (req.query.account === 'admin' && md5(req.query.pwd) === md5('123')) {
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, //24小时后过期
      account: 'admin',
      uid: '1'
    }, 'mySecret');
    res.send({ token: token, user: { account: 'admin' } });
  }
  else {
    res.send({ error: '帐号或密码错误' });
  }

});

module.exports = router;