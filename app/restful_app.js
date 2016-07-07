var express = require('express');
var app = express();
var fs = require('fs');

var dataPath = __dirname + '/' + 'data.json';

//添加的新用户数据
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
};


app.get('/listUser', function(rea, res) {
    fs.readFile(dataPath, 'utf-8', function(err, data) {
        console.log(data);
        res.end(JSON.prase(data));
    });
});

app.get('/addUser', function(req, res) {
    // 读取已存在的数据
    fs.readFile(dataPath, 'utf8', function(err, data) {
        data = JSON.parse(data);
        data.user4 = user.user4;
        console.log(data);
        fs.writeFile(dataPath, JSON.stringify(data), 'utf-8', function(err) {
            if (err) console.log(err);
            res.end(JSON.stringify(data));
        });

    });
});

app.get('/:id',function(req,res){
  console.log('获取用户详情');
  fs.readFile(dataPath,'utf8',function(err,data){
    var tmpData = JSON.parse(data);

    var key = 'user' + req.params.id;
    console.log(key);
    res.end(JSON.stringify(tmpData[key]));
  });
});

app.get('/deleteUser/:id', function (req, res) {
  console.log(req.params);
   // First read existing users.
   fs.readFile( dataPath, 'utf8', function (err, data) {
       data = JSON.parse( data );
       var key = 'user' + req.params.id;
       delete data[key];
       console.log( data );
       res.end( JSON.stringify(data));
   });
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('server started');
});
