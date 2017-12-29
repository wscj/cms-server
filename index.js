const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router');

//设置静态文件路径
app.use(express.static('assets'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'), (err) => {
		err && console.error(err);
	});
});

app.listen(7878, () => {
	console.log('listening on port 7878');
});

// 开启https服务
// var fs = require('fs');
// var http = require('http');
// var https = require('https');
// var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
// var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

// var credentials = {key: privateKey, cert: certificate};
// var express = require('express');
// var app = express();

// // your express configuration here

// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

// httpServer.listen(8080);
// httpsServer.listen(8443);