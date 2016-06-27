var http = require('http');
var querystring = require('querystring');
var post_data = querystring.stringify({
      'product' : 'club',
      'sign' : 'ddddddddddddddd',
      'sender': '发送者的名字:超级管理员',
      'uids' : ['ffwq@qq.com', 'ffqwf@www.com'],
      'msg' : 'wwww'
});
console.log( typeof post_data);
var options = {
  host:'localhost',
  port:8080,
  path:'/sig/user/testNodePost',
  method:'POST',
  headers:{
    'Content-Type' : 'application/x-www-form-urlencoded',// 不写这个参数，后台会接收不到数据
    'Content-Length' : post_data.length
  }
};

var req = http.request(options,function(res){
  console.log('STATUS:' + res.statusCode);
  console.log('HEADERS:' + JSON.stringify(res.headers));
  res.setEncoding('utf-8');
  res.on('data',function(body){
    console.log('BODY：' + body);
  });
});
// post方法里

req.write(post_data,'utf-8');
req.end();


/**

在通过POST方式向服务器发送AJAX请求时最好要通过设置请求头来指定为application/x-www-form-urlencoded编码类型。
知道通过表单上传文件时必须指定编码类型为"multipart/form-data"。
ajax.setRequestHeader("content-type","application/x-www-form-urlencoded")
表示将请求中的内容，按照UTF-8的方式进行编码，只针对POST请求有效，
设置此内容是为了确保服务器知道实体中有参数变量，
注意: 请求体格式和请求头的Content-Type类型必须保持一致,
如果1的格式,设置Content-Type是application/json,或者2的格式,
设置Content-Type是application/x-www-form-urlencoded,后台接收到的请求提都会是空的
*/