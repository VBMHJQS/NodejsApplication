/**
* 监控文件内容变化，并作出一些动作,不成功
*/
var fs = require('fs');
var fileName = 'F:\\20160622\\20160601.log';
fs.watch(fileName,(function(){
  var count = 0;
  return function(){
    count ++;
    console.log('文件' + fileName + '内容变化，第' + count + '次');
  };
}));
console.log('watching file...');
