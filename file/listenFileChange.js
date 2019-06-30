var fs = require('fs');
// 加载编码转换模块
var iconv = require('iconv-lite'); // 读取gb2312或gbk编码的文件
var readline = require('readline');
var http = require('http');
var querystring = require('querystring');
//var isExists = require('./isExists');


var filename = 'F:\\20160622\\20160603.log';

var logsArr = new Array();
var listenArr = new Array();
<<<<<<<
HEAD

function init() {
    sendHisLogs(filename);
}

<<<<<<< .
mine

function sendHisLogs(filename, listenLogs) {

    var rl = readline.createInterface({
        input: fs.createReadStream(filename, {
            enconding: 'utf8'
        }),
        output: null,
        terminal: false  //这个参数很重要
    });
======
    =
        function sendHisLogs(filename) {
            console.log('发送历史信号...');
            var rl = readline.createInterface({
                input: fs.createReadStream(filename, {
                    enconding: 'utf8'
                }),
                output: null,
                terminal: false  //这个参数很重要
            });
        >>>>>>> .
            theirs

            << < < < < <
        .
            mine
            rl.on('line', function (line) {
                if (line) {
                    logsArr.push(line.toString());
                }
            }).on('close', function () {
                for (var i = 0; i < logsArr.length; i++) {
                    console.log('发送历史信号: ' + logsArr[i]);
                    //generateLog(logsArr[i])
                }
                listenLogs(filename);
            });
        ======
            =
                rl.on('line', function (line) {
                    if (line) {
                        logsArr.push(line.toString());
                    }
                }).on('close', function () {
                    generateArraySend(logsArr, true);//将历史的数组发送出去
                });


        >>>>>>> .
            theirs
            === === =

                function init() {
                    sendHisLogs(filename);
                >>>>>>>
                    cc61bb897d99de9a4aa2cd821ea3608750a0f72a
                }
                < < < < < < <
        .
            mine

            function generateLog(str) {
                var regExp = /(\[.+?\])/g;//(\\[.+?\\])
                var res = str.match(regExp);
                console.log(res);
                for (i = 0; i < res.length; i++) {
                    res[i] = res[i].replace('[', '').replace(']', ''); //发送历史日志
                }


            ======
                =

            <<<<<<<
                HEAD

                function generateArraySend(allArray, flag) {
                    var regExp = /(\[.+?\])/g;//(\\[.+?\\])
                    for (var n = 0; n < allArray.length; n++) {
                        var res = allArray[n].match(regExp);
                        for (i = 0; i < res.length; i++) {
                            res[i] = res[i].replace('[', '').replace(']', ''); //发送历史日志
                        }
                        res.push(allArray[n].substring(0, 23));// 截取日期push进数组最后
                        allArray[n] = res;
                    }
                    postFun(0, allArray, flag);//发送请求
                >>>>>>> .
                    theirs
                    === === =

                        function sendHisLogs(filename) {
                            console.log('发送历史信号...');

                            //isExists.isExists();

                            // var rl = readline.createInterface({
                            //     input: fs.createReadStream(filename,{
                            // 			enconding:'base64'// ‘utf8′, ‘ascii', 或 ‘base64′
                            // 		}),
                            //     output: null,
                            //     terminal: false //这个参数很重要
                            // });
                            //
                            // rl.on('line', function(line) {
                            //
                            //     if (line) {
                            //         //	console.log(iconv);
                            //         var temp = iconv.decode(line.toString(), 'gb2312')
                            //         //console.log(temp);
                            //         logsArr.push(line.toString());
                            //     }
                            // }).on('close', function() {
                            //   console.log(logsArr);
                            //     generateArraySend(logsArr, true); //将历史的数组发送出去
                            // });


                            fs.readFile(filename, function (err, data) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    var temp = iconv.decode(data, 'gb2312');
                                    var logsArr = temp.split('\r\r\n');
                                    //logsArr.shift();
                                    for (var i in logsArr) {
                                        if (logsArr[i] == '' || logsArr[i] == 'undefined') {
                                            logsArr.splice(i, 1);
                                            i = i - 1;
                                        }
                                    }
                                    //console.log(logsArr);
                                    generateArraySend(logsArr, true); //将历史的数组发送出去
                                }
                            });
                        >>>>>>>
                            cc61bb897d99de9a4aa2cd821ea3608750a0f72a
                        }
                        < < < < < < <
                .
                    mine
                    var listenLogs = function (filePath) {
                        console.log('日志监听中...');
                        var fileOPFlag = "a+";
                        fs.open(filePath, fileOPFlag, function (error, fd) {
                            var buffer;
                            var remainder = null;
                            fs.watchFile(filePath, {
                                persistent: true,
                                interval: 1000
                            }, function (curr, prev) {
                                console.log(curr);
                                if (curr.mtime > prev.mtime) {
                                    //文件内容有变化，那么通知相应的进程可以执行相关操作。例如读物文件写入数据库等
                                    buffer = new Buffer(curr.size - prev.size);
                                    fs.read(fd, buffer, 0, (curr.size - prev.size), prev.size, function (err, bytesRead, buffer) {
                                        generateTxt(buffer.toString())
                                    });
                                } else {
                                    console.log('文件读取错误');
                                }
                            });
                        ======
                            =


                        >>>>>>> .
                            theirs

                            function generateArraySend(allArray, flag) {
                                var regExp = /(\[.+?\])/g; //(\\[.+?\\])
                                for (var n = 0; n < allArray.length; n++) {
                                    var res = allArray[n].match(regExp);
                                    for (i = 0; i < res.length; i++) {
                                        res[i] = res[i].replace('[', '').replace(']', ''); //发送历史日志
                                    }
                                    res.push(allArray[n].substring(0, 23)); // 截取日期push进数组最后
                                    allArray[n] = res;
                                }
                                postFun(0, allArray, flag); //发送请求
                            }

                            function listenLogs(filePath) {
                                console.log('日志监听中...');
                                var fileOPFlag = "a+";
                                fs.open(filePath, fileOPFlag, function (error, fd) {
                                    var buffer;
                                    var remainder = null;
                                    fs.watchFile(filePath, {
                                        persistent: true,
                                        interval: 1000
                                    }, function (curr, prev) {
                                        if (curr.mtime > prev.mtime) {
                                            //文件内容有变化，那么通知相应的进程可以执行相关操作。例如读物文件写入数据库等
                                            buffer = new Buffer(curr.size - prev.size + 2);
                                            fs.read(fd, buffer, 0, (curr.size - prev.size + 2), prev.size, function (err, bytesRead, buffer) {
                                                generateTxt(buffer.toString())
                                            });
                                        } else {
                                            console.log('文件读取错误');
                                        }
                                    });

                                    function generateTxt(str) { // 处理新增内容的地方
                                        var temp = str.split('\r\r\n');
                                        temp.pop();
                                        console.log(temp.length + '>>>' + temp);
                                        generateArraySend(temp, false);
                                    }
                                });
                            }

                            function postFun(index, array, listenFlag) { //listenFlag是否继续监听，当在监听的时候调用次方法时，为false
                                if (index >= array.length) {
                                    if (listenFlag) {
                                        listenLogs(filename); // 批量的请求发送完，开始监听日志
                                    }
                                    return;
                                }

                                var currParam = array[index];
                                //2016/06/01 14:59:10.486自动交易信息:帐户[kctest]商品[TF1606]类型[卖平]数量[1]价格[100.99000000]注释[TB_G_RBS_TF000_4MIN_V1_1]
                                var symReg = /[a-zA-Z]+/;
                                console.log(currParam);
                                var actoinTemp;
                                if (currParam[2] == '卖平') {
                                    actoinTemp = 8;
                                } else if (currParam[2] == '买平') {
                                    actoinTemp = 2;
                                } else if (currParam[2] == '买开') {
                                    actoinTemp = 4;
                                } else if (currParam[2] == '卖开') {
                                    actoinTemp = 1;
                                }

                                var post_data = querystring.stringify({
                                    owner_id: currParam[0],
                                    symbol_id: currParam[1].match(symReg)[0],
                                    contract: currParam[1],
                                    action: actoinTemp,
                                    quant: currParam[3],
                                    order_price: currParam[4],
                                    order_time: currParam[6].replace('/', '-').replace('/', '-')
                                });
                                var options = {
                                    host: 'localhost',
                                    port: 8080,
                                    path: '/sig/user/testNodePost',
                                    method: 'POST',
                                    headers: {
                                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0',
                                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', // 不写这个参数，后台会接收不到数据
                                        'Content-Length': post_data.length
                                    }
                                };
                                console.log(post_data);
                                var req = http.request(options, function (res) {
                                    //console.log('STATUS:' + res.statusCode);
                                    //console.log('HEADERS:' + JSON.stringify(res.headers));
                                    res.setEncoding('utf-8');
                                    res.on('data', function (body) {
                                        console.log('BODY：' + body);
                                    });
                                    res.on('end', function () {
                                        console.log('END');
                                        postFun(index + 1, array, listenFlag);
                                    })
                                });

                                req.on('error', function (err) {
                                    console.log('ERROR');
                                    if (err) {
                                        console.error(err);
                                        postFun(index + 1, array, listenFlag); // 当发生异常，不终止，继续解析下一条
                                    }
                                });
                                //	post方法里
                                req.write(post_data, 'utf-8');
                                req.end();
                            }

                            init();
