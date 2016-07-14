var fs = require('fs');
var path = require('path');
var iconv = require('iconv-lite');

var logFolder = 'F:\\20160622';
var array = new Array();
var logsPath = new Array();
var recordsArray = new Array();
fs.readdirSync(logFolder).forEach(function(item, index) {
    var temFile = logFolder + path.sep + item;
    var stat = fs.lstatSync(temFile);
    if (!stat.isDirectory()) {
        //console.log(temFile);
        logsPath.push(temFile);
    }
    //
});
//console.log(logsPath);
// getLogsRecords(logsPath, 0);


function getLogsRecords(logsPath, index) {

    if (index >= logsPath.length) {
        //console.log(index);
        console.log(recordsArray.length);
        //return;
    }

    var temFile = logsPath[index];
    fs.readFile(temFile, function(err, data) {
        var temp = iconv.decode(data, 'gb2312');
        //console.log(temp);
        var logsArr = temp.split('\r\r\n');
        for (var i in logsArr) {
            if (logsArr[i] == '' || logsArr[i] == 'undefined') {
                logsArr.splice(i, 1);
                i = i - 1;
            }
        }
        for(var i in logsArr){
          recordsArray = recordsArray.concat(logsArr[i].split('\r\n'));
        }
        console.log(temFile + '>>>' + logsArr.length);
        getLogsRecords(logsPath,index+1);
        //recordsArray.concat(logsArr)
        // array.concat(logsArr);
        // console.log(array.lenght);
    });
}
split2();
function split2() {
  var temFile = 'F:\\20160622\\20160606.log';
  var array = new Array();
  fs.readFile(temFile, function(err, data) {
      var temp = iconv.decode(data, 'gb2312');
      //console.log(temp);
      var logsArr = temp.split('\r\r\n');

      for(var i in logsArr){
        array = array.concat(logsArr[i].split('\r\n'));
      }
      for (var i in array) {
          if (array[i] == '' || array[i] == 'undefined') {
              array.splice(i, 1);
              i = i - 1;
          }
      }
      console.log(array);
      //getLogsRecords(logsPath,index+1);
      //recordsArray.concat(logsArr)
      // array.concat(logsArr);
      // console.log(array.lenght);
  });
}
