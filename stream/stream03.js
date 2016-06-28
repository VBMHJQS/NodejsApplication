var fs = require("fs");
var filename = 'F:\\20160622\\20160601.log';
// 创建一个可读流
var readerStream = fs.createReadStream(filename);
readerStream.setEncoding('UTF8');
// 创建一个可写流
var writerStream = fs.createWriteStream('20160601.log');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");
