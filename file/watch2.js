/*
* 监控文件内容的改变 成功
*/
var fs = require('fs');// 引入fs 模块

var filePath = 'input.txt';

fs.watch(filePath, function (event, filename) {
    console.log('event is: ' + event);
    if (filename) {
        console.log('filename provided: ' + filename);
        //readTxt();
    } else {
        console.log('filename not provided');
    }

    function readTxt() {
        fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
            if (err) {
                return console.error(err);
            } else {
                console.log(data.toString());
            }
        });
    }
});
console.log(filePath + ' 被监听中...');
