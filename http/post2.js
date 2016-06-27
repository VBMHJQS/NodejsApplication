var request = require('request');
// request('http://www.baidu.com', function (error, response, body) {
//  if (!error && response.statusCode == 200) {
//  console.log(body) // 打印google首页
// }
// })
var options = {
  host:'localhost',
  port:8080,
  path:'/sig/user/testNodePost',
  method:'post'
};
var data = {
  product : 'club',
  sign : 'ddddddddddddddd',
  sender: '发送者的名字:超级管理员',
  uids : ['ffwq@qq.com', 'ffqwf@www.com'],
  msg : 'wwww'
};
request.post(options).form(data);
