var lineReader = require('line-reader');
var iconv = require('iconv-lite');
var fs = require('fs');

// read all lines:

// lineReader.eachLine('F:\\20160622\\20160603.log', function(line, last, cb) {
//   console.log(typeof line);
//   var temp = iconv.decode(line, 'gb2312')
//   console.log(temp);
//
//   // if (/* done */) {
//   //   cb(false); // stop reading
//   // } else {
//   //   cb();
//   // }
// });

/**
 * 读取编码格式为gbk|gb2312的文件，使用readFile和‘iconv-lite’
 * 缺点：大文件不可取，一次性读完~
 * @param  {[type]} 'F:2016062220160603.log' [description]
 * @param  {[type]} function(err,              data          [description]
 * @return {[type]}                            [description]
 */
fs.readFile('F:\\20160622\\20160603.log', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var temp = iconv.decode(data, 'gb2312');
        console.log(temp.split('\r\r\n'));
    }

});
