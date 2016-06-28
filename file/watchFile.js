/**
* 监控文件内容变化
*/
var fs = require('fs');
var fileName = 'input.txt';
var fileOPFlag="a+";
fs.open(fileName,fileOPFlag,function(error,fd){
    var buffer;
    var remainder = null;
    fs.watchFile(fileName,{
       persistent: true,
       interval: 1000
    },function(curr, prev){
        if(curr.mtime>prev.mtime){
           //文件内容有变化，那么通知相应的进程可以执行相关操作。例如读物文件写入数据库等
          buffer = new Buffer(curr.size - prev.size);
          fs.read(fd,buffer,0,(curr.size - prev.size),prev.size,function(err, bytesRead, buffer){
            generateTxt(buffer.toString())
          });
        }else{
           console.log('文件读取错误');
        }
       });

       function generateTxt(str){
        var temp = str.split('\r\n');
        for(var s in temp){
          console.log(temp[s]);
        }
       }
});



console.log('watching file...');
