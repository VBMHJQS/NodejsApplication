var request = require('request');

var options = {
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    url: 'http://localhost:8080/sig/user/testNodePost',
    method: 'POST',
    json: false,
    body: {
        product: 'club',
        sign: 'ddddddddddddddd',
        sender: '发送者的名字:超级管理员',
        msg: 'wwww'
    }
};


request(options, function (error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log('----info------', data);
    }
});