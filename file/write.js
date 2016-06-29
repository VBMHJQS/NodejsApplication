var fs = require('fs');
var path = 'F:\\20160622\\20160601.log';
var data = '2016/06/17 22:58:32.965自动交易信息:帐户[kctest]商品[rb1610]类型[买开]数量[1]价格[2088.00000000]注释[TB_G_BCML_RB000_60MIN_V1]\r\r\n2016/06/17 22:58:32.965自动交易信息:帐户[kctest]商品[rb1610]类型[买开]数量[1]价格[2088.00000000]注释[TB_G_BCML_RB000_60MIN_V1]\r\r\n2016/06/17 22:58:32.965自动交易信息:帐户[kctest]商品[rb1610]类型[买开]数量[1]价格[2088.00000000]注释[TB_G_BCML_RB000_60MIN_V1]\r\r\n';
fs.appendFile(path, data, {encoding:'utf-8'}, function(err){
	if(err){
		console.log('err');
	}else{
		console.log('The "data to append" was appended to file!');
	}
});
