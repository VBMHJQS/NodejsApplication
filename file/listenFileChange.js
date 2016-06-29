var fs = require('fs');
var readline = require('readline');
var http = require('http');
var querystring = require('querystring');
var filename = 'F:\\20160622\\20160620.log';

var logsArr = new Array();
var listenArr = new Array();
function init(){
	sendHisLogs(filename, listenLogs);
}
function sendHisLogs(filename,listenLogs){
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
		for(var i = 0 ;i<logsArr.length;i++){
			generateLog(logsArr[i])
		}
		listenLogs(filename);
	});
}
function generateLog(str){
	var regExp = /(\[.+?\])/g;//(\\[.+?\\])
	var res = str.match(regExp);
	for(i=0;i<res.length;i++){
		res[i] = res[i].replace('[','').replace(']',''); //发送历史日志
	}
	res.push(str.substring(0,23));// 截取日期push进数组最后
	//console.log(res);
	postToSim(res);
	// 将数组转成json
	function postToSim(array){
		var post_data = querystring.stringify({
			account:array[0],
			contract:array[1],
			action:array[2],
			quant:array[3],
			tradePrice:array[4],
			instrument:array[5],
			tradedTime:array[6]
		});

		var options = {
				host:'localhost',
				port:8080,
				path:'/sig/user/testNodePost',
				method:'POST',
				headers:{
					'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
					'Content-Type' : 'application/x-www-form-urlencoded',// 不写这个参数，后台会接收不到数据
					'Content-Length' : post_data.length
				}
		};

		var req = http.request(options,function(res){
			//console.log('STATUS:' + res.statusCode);
			//console.log('HEADERS:' + JSON.stringify(res.headers));
			res.setEncoding('utf-8');
			res.on('data',function(body){
				console.log('BODY：' + body);
			});
		});
		// post方法里
		req.write(post_data,'utf-8');
		req.end();
	}
}
var listenLogs = function(filePath){
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
				buffer = new Buffer(curr.size - prev.size);
				fs.read(fd,buffer,0,(curr.size - prev.size),prev.size,function(err, bytesRead, buffer){
					generateTxt(buffer.toString())
				});
			}else{
				console.log('文件读取错误');
			}
		});

		function generateTxt(str){ // 处理新增内容的地方
			var temp = str.split('\r\n');
			for(var s in temp){
				console.log(temp[s]);
			}
		}
	});
}
function getNewLog(path){
	console.log('做一些解析操作');
}
init();
