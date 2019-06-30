var fs = require('fs');
var readline = require('readline');// 引入readline模块

var filename = 'input.txt';
var rl = readline.createInterface({
    input: fs.createReadStream(filename, {
        enconding: 'utf8'
    }),
    output: null,
    terminal: false  //这个参数很重要
});
rl.on('line', function (line) {
    if (line) {
        console.log(line.toString());
    }
}).on('close', function () {
    console.log('读文件结束!');
    //process.exit(0);
});
