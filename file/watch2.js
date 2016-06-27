/*
* 监控文件内容的改变 成功
*/
var fs = require('fs');
fs.watch('F:\\20160622\\20160601.log', function (event, filename) {
  console.log('event is: ' + event);
  if (filename) {
    console.log('filename provided: ' + filename);
  } else {
    console.log('filename not provided');
  }
});
