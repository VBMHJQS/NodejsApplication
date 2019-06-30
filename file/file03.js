var fs = require('fs');

console.log('准备打开文件');
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.err(err);
    }
    console.log('打开文件成功');
});
fs.stat('input.txt', function (err, stats) {
    console.log(stats.isFile()); 		//true
})
