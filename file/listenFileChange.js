var fs = require('fs');
var readline = require('readline');
var filename = 'F:\\20160622\\20160620.log';

var logsArr = new Array();
var listenArr = new Array();
function init(){
 sendHisLogs(filename, listenLogs);

}
function sendHisLogs(filename,listenLogs){
  console.log('发送历史信号...');
  var rl = readline.createInterface({
    input: fs.createReadStream(filename,{
        enconding:'utf8'
    }),
    output: null,
    terminal: false  //这个参数很重要
  });

  rl.on('line', function(line) {
    if (line) {
      logsArr.push(line.toString());
    }
  }).on('close', function() {
    for(var i = 0 ;i<logsArr.length;i++){
      generateLog(logsArr[i])
    }
    console.log(i);
    listenLogs(filename);
  });
}
function generateLog(str){
  var regExp = /(\[.+?\])/g;//(\\[.+?\\])
  var res = str.match(regExp);
  for(i=0;i<res.length;i++){
    res[i] = res[i].replace('[','').replace(']','');
  }
  console.log(res);
}
var listenLogs = function(filePath){
  console.log('日志监听中...');
  fs.watchFile(filePath,{ persistent: true, interval: 1000 },function (curr, prev) {
    if(curr.mtime > prev.mtime){
      console.log('文件被修改');
    }

    getNewLog(filePath);

  });
}
function getNewLog(path){
  console.log('做一些解析操作');
}
init();
