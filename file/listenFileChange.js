var fs = require('fs');
var readline = require('readline');
var http = require('http');
var querystring = require('querystring');
var filename = 'F:\\20160622\\20160601.log';

var logsArr = new Array();
var listenArr = new Array();
function init(){
	sendHisLogs(filename);
}
function sendHisLogs(filename){
	console.log('发送历史信号...');
	var rl = readline.createInterface({
		input: fs.createReadStream(filename,{
			enconding:'utf8'
		}),
		output: null,
		terminal: false  //这个参数很重要
	});

	rl.on('line', function(line) {
		if (line) {
			logsArr.push(line.toString());
		}
	}).on('close', function() {
		generateArraySend(logsArr,true);//将历史的数组发送出去
	});
}

function generateArraySend(allArray,flag){
	var regExp = /(\[.+?\])/g;//(\\[.+?\\])
	for(var n = 0;n<allArray.length;n++){
		var res = allArray[n].match(regExp);
		for(i=0;i<res.length;i++){
			res[i] = res[i].replace('[','').replace(']',''); //发送历史日志
		}
		res.push(allArray[n].substring(0,23));// 截取日期push进数组最后
		allArray[n]=res;
	}
	postFun(0,allArray,flag);//发送请求
}

function listenLogs(filePath){
	console.log('日志监听中...');
	var fileOPFlag="a+";
	fs.open(filePath,fileOPFlag,function(error,fd){
		var buffer;
		var remainder = null;
		fs.watchFile(filePath,{
			persistent: true,
			interval: 1000
		},function(curr, prev){
			if(curr.mtime>prev.mtime){
				//文件内容有变化，那么通知相应的进程可以执行相关操作。例如读物文件写入数据库等
				buffer = new Buffer(curr.size - prev.size+2);
				fs.read(fd,buffer,0,(curr.size - prev.size+2),prev.size,function(err, bytesRead, buffer){
					generateTxt(buffer.toString())
				});
			}else{
				console.log('文件读取错误');
			}
		});

		function generateTxt(str){ // 处理新增内容的地方
			var temp = str.split('\r\r\n');
			temp.pop();
			console.log(temp.length+'>>>'+temp);
			generateArraySend(temp,false);
		}
	});
}

function postFun(index,array,listenFlag){//listenFlag是否继续监听，当在监听的时候调用次方法时，为false
	if(index >= array.length){
		if(listenFlag){
			listenLogs(filename);// 批量的请求发送完，开始监听日志
		}
		return;
	}

	var currParam = array[index];
	var post_data = querystring.stringify({
		account:currParam[0],
		contract:currParam[1],
		action:currParam[2],
		quant:currParam[3],
		tradePrice:currParam[4],
		instrument:currParam[5],
		tradedTime:currParam[6].replace('/','-').replace('/','-')
	});
	var options = {
			host:'localhost',
			port:8080,
			path:'/sig/user/testNodePost',
			method:'POST',
			headers:{
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0',
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',// 不写这个参数，后台会接收不到数据
				'Content-Length' : post_data.length
			}
	};
	//console.log(post_data);
	var req = http.request(options,function(res){
		//console.log('STATUS:' + res.statusCode);
		//console.log('HEADERS:' + JSON.stringify(res.headers));
		res.setEncoding('utf-8');
		res.on('data',function(body){
			console.log('BODY：' + body);
		});
		res.on('end',function(){
			postFun(index + 1,array,listenFlag);
		})
	});

	req.on('err',function(err){
		if(e){	
			console.info(e);
		}
	});
//	post方法里
	req.write(post_data,'utf-8');
	req.end();
}
init();
