/**
 非阻塞程序，即异步
 */
var fs = require('fs');
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    } else {
        console.log(data.toString());
    }
});
console.log('程序执行结束');
