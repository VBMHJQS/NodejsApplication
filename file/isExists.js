var fs = require('fs');
var readline = require('readline');
var Q = require("q");
var path = 'C:\\Users\\王兴超\\Desktop\\electron-simple\\web_content\\data\\formula.txt';
var formulaArray = new Array();
var formulaStr;

var preIsExist = function(callback) {
    var rl = readline.createInterface({
        input: fs.createReadStream(path, {
            enconding: 'utf8'
        }),
        output: null,
        terminal: false //这个参数很重要
    });

    rl.on('line', function(line) {
        if (line) {
            formulaArray.push(JSON.parse(line).formula);
        }
    }).on('close', function() {
        var deffered = Q.defer();

        //generateArraySend(logsArr, true); //将历史的数组发送出去
        formulaStr = formulaArray.join(',');
        var index = formulaStr.indexOf('TB_G_YANG_Y000_10MIN_V1_4');
        deffered.resolve(index);
        console.log(formulaStr);
        return deffered.promise.nodeify(callback);
    });


}
preIsExist(function(){
  console.log(123);
});
