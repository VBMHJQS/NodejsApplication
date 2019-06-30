var fs = require('fs');
var path = require('path');
var iconv = require('iconv-lite');
var fileFolder = 'F:\\20160622';
var filePath = 'F:\\20160622\\1.log';

function watchFoler() {
    console.log('start');
    var currPath = filePath;
    fs.watch(fileFolder, function (even, filename) {
        if (even == 'rename') {
            console.log('有新文件: ' + filename);
            fs.readdirSync(fileFolder).forEach(function (filename) {
                temp = fileFolder + path.sep + filename;
                fs.unwatchFile(temp);
            });
            appendContent(fileFolder + path.sep + filename);
        }
    });
    console.log('end');
    appendContent(currPath);

// }
    function appendContent(path) {
        console.log('监听' + path + '文件内容变化');
        fs.open(path, 'a+', function (error, fd) {
            var buffer;
            var remainder = null;
            fs.watchFile(path, {
                persistent: true,
                interval: 1000
            }, function (curr, prev) {
                if (curr.mtime > prev.mtime) {
                    //文件内容有变化，那么通知相应的进程可以执行相关操作。例如读物文件写入数据库等
                    buffer = new Buffer(curr.size - prev.size + 2);
                    fs.read(fd, buffer, 0, (curr.size - prev.size + 2), prev.size, function (err, bytesRead, buffer) {
                        //console.log();
                        var newAddStr = iconv.decode(buffer, 'gb2312');
                        console.log(newAddStr);
                    });
                } else {
                    console.log('文件读取错误');
                }
            });
        });

    }

    watchFoler();
