var express = require('express');
var app = express();

var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(multer({
    dest: '/tmp/'
}).array('image'));

app.use(express.static('static')); // 引入静态资源

app.get('/', function(req, res) {
    console.log('主页 GET 请求');
    res.send('hello world');
});
app.post('/', function(req, res) {
    console.log('主页 POST 请求');
    res.send('Hello POST');
});
app.delete('/del', function(req, res) {
    console.log('/del 响应 DELETE 请求');
    res.send('删除页面');
});
app.get('/list', function(req, res) {
    console.log('/list 响应 list 请求');
    res.send('集合页面');
});
app.get('/ab*cd', function(req, res) {
    console.log('/ab*cd Get 请求');
    res.send('正则匹配');
});

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.get('/test', function(req, res) {
    console.log(req.query);
    res.end(JSON.stringify(req.query));
});

app.post('/upload_file', function(req, res) {
    console.log('上传文件');
    console.log(req.files[0]); // 上传的文件信息
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            }
            res.end(JSON.stringify(res.query));
            //res.sendFile(JSON.stringify(res.query));
        });
    });
});

var server = app.listen(8081, function() {
    console.log(server.address());
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
