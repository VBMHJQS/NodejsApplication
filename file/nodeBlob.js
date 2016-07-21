var fs = require('fs');
fs.readFile('D:\\test\\A.txt',function(err,data1){
  fs.readFile('D:\\test\\B.txt',function(err,data2){
    fs.readFile('D:\\test\\C.txt',function(err,data3){
      console.log(data1+'>>>'+data2+'>>>'+data3);
      fs.writeFile('D:\\test\\D.txt',data1+'>>>'+data2+'>>>'+data3,function(err){
        console.log(err);
      });
    });
  });
});
