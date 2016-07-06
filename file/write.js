var fs = require('fs');
var iconv = require('iconv-lite');
var path = 'F:\\20160622\\20160603.log';
var data = '2016/06/17 22:58:32.965自动交易信息:帐户[kctest]商品[rb1610]类型[买开]数量[1]价格[2088.00000000]注释[TB_G_BCML_RB000_60MIN_V1]\r\r\n2016/06/17 22:58:32.965自动交易信息:帐户[kctest]商品[rb1610]类型[买开]数量[1]价格[2088.00000000]注释[TB_G_BCML_RB000_60MIN_V1]\r\r\n2016/06/17 22:58:32.965自动交易信息:帐户[kctest]商品[rb1610]类型[买开]数量[1]价格[2088.00000000]注释[TB_G_BCML_RB000_60MIN_V1]\r\r\n';
writeFile(path);
function writeFile(file){
    // 测试用的中文
    //var str = "\r\n我是一个人Hello myself!";
    // 把中文转换成字节数组
    var arr = iconv.encode(data, 'gb2312');
    console.log(arr);

    // appendFile，如果文件不存在，会自动创建新文件
    // 如果用writeFile，那么会删除旧文件，直接写新文件
    fs.appendFile(file, arr, function(err){
        if(err)
            console.log("fail " + err);
        else
            console.log("写入文件ok");
    });
}
