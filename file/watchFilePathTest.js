/**
 * 测试目录下新增文件，并获取新增文件的文件名
 */
var fs = require('fs');
var filePath = 'F:\\logs';
fs.watch(filePath, function (event, filename) {
    console.log('event: ' + event);
    if (filename) {
        console.log(filename);
    } else {
        console.log('nothings');
    }
});
