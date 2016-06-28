var fs = require('fs');
var readline = require('readline');

var filename = 'F:\\20160622\\20160620.log';
var logsArr = new Array();
var rl = readline.createInterface({
  input: fs.createReadStream(filename,{
      enconding:'utf8'
  }),
  output: null,
  terminal: false  //这个参数很重要
});
var i = 0;
rl.on('line', function(line) {
  if (line) {
    console.log(line.toString());
    logsArr.push(line.toString());
    i++;
  }
}).on('close', function() {
  //console.log('Have a great day!');
  //process.exit(0);
  console.log(logsArr.length);
  console.log('i: ' + i);
});
