var fs = require('fs');
fs.open('123.txt' , 'r' , function (err,fd){
 if(err){
  console.error(err);
  return;
 }

 var buf = new Buffer(20);
 fs.read(fd, buf, 0, buf.length, null, function(err,bytesRead, buffer){
   console.log(fd);
  if(err){
   console.log(err);
   return;
  }
  console.log('bytesRead' +bytesRead);
  console.log(buffer == buf);
});
})
