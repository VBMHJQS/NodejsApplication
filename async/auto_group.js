/**
 * auto用来处理有依赖关系的多个任务的执行。
 *
 * 比如某些任务之间彼此独立，可以并行执行；但某些任务依赖于其它某些任务，只能等那些任务完成后才能执行。
 * 虽然我们可以使用parallel和series结合起来实现该功能，但如果任务之间关系复杂，则代码会相当复杂，以后如果想添加一个新任务，也会很麻烦。
 *
 *
 * 1、读数据
 * 2、创建文件
 * 3、写文件
 * 4、发送邮件
 * 步骤12可以并行运行，步骤3必须等12完成之后，4要等3完成之后运行
 */
var async = require('async');
// async.auto({
//     getData: function(callback) {
//         setTimeout(function() {
//             console.log('1.1: got data');
//             callback(null, 'mydata');
//         }, 300);
//     },
//     makeFolder: function(callback) {
//         setTimeout(function() {
//             console.log('1.1: made folder');
//             callback(null, 'myfolder');
//         }, 200);
//     },
//     writeFile: ['getData', 'makeFolder', function(callback) {
//         setTimeout(function() {
//             console.log('1.1: wrote file');
//             callback(null, 'myfile');
//         }, 300);
//     }],
//     emailFiles: ['writeFile', function(callback, results) {
//         console.log('1.1: emailed file: ', results.writeFile);
//         callback(null, results.writeFile);
//     }]
// }, function(err, results) {
//     console.log(err);
//     console.log(results);
// });




async.auto({
    getData: function(callback) {
        setTimeout(function() {
            console.log('1.2: got data');
            callback(null, 'mydata');
        }, 300);
    },
    makeFolder: function(callback) {
        setTimeout(function() {
            console.log('1.2: made folder');
            callback(null, 'myfolder');
        }, 200);
    },
    writeFile: ['getData', 'makeFolder', function(callback, results) {
        setTimeout(function() {
            console.log('1.2: wrote file');
            callback('myerr');
        }, 300);
    }],
    emailFiles: ['writeFile', function(callback, results) {
        console.log('1.2: emailed file: ' + results.writeFile);
        callback('err sending email', results.writeFile);
    }]
}, function(err, results) {
    console.log(err);
    console.log(results);
});
