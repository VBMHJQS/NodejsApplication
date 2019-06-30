/**
 * 创建文件，为了测试监听目录变化的js
 */
var fs = require('fs');
var filePath = 'F:\\logs\\1.log';
fs.open(filePath, 'a', function (para1, para2) {
    console.log(para1);
    console.log(para2);
});
