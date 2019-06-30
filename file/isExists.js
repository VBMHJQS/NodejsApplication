var fs = require('fs');
var readline = require('readline');
var Q = require("q");
var path = 'C:\\Users\\王兴超\\Desktop\\electron-simple\\web_content\\data\\formula.txt';
var formulaArray = new Array();
var formulaStr;

var preIsExist = function () {
    var deffered = Q.defer();
    var rl = readline.createInterface({
        input: fs.createReadStream(path, {
            enconding: 'utf8'
        }),
        output: null
    });

    rl.on('line', function (line) {
        if (line) {
            formulaArray.push(JSON.parse(line).formula);
        }
    }).on('close', function () {


        //generateArraySend(logsArr, true); //将历史的数组发送出去
        formulaStr = formulaArray.join(',');
        var index = formulaStr.indexOf('TB_G_YANG_Y000_10MIN_V1_4');
        deffered.resolve(index);
        // console.log(formulaStr);

    });

    return deffered.promise;

}

function index() {
    preIsExist().then(function (data) {
        return data;
    }, function (error) {
        console.error(error);
    });
    console.log(123);
}

console.log(index());
// module.exports.isExis  ts = preIsExist;
