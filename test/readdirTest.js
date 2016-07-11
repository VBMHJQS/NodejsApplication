var fs = require('fs');
console.log('start');
fs.readdirSync('F:\\20160622').forEach(function(filename){
  console.log(filename);
});
console.log('end');
//
// , function(err, files) {
//     console.log('遍历文件');
//     for (var i; i < files.length; i++) {
//         console.log(files[i]);
//         fs.unwatchFile(files[i]);
//     }
//
// }
