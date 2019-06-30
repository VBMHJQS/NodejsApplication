var fs = require('fs');
var async = require('async');

var a = 'D:\\test\\A.txt';
var b = 'D:\\test\\B.txt';
var c = 'D:\\test\\C.txt';
var d = 'D:\\test\\D.txt';

async.auto({
    getData1: function (callback) {
        fs.readFile(a, function (err, data) {
            console.log('getData1');
            callback(err, data.toString());
        });
    },
    getData2: function (callback) {
        fs.readFile(b, function (err, data) {
            console.log('getData2');
            callback(err, data.toString());
        });
    },
    getData3: function (callback) {
        fs.readFile(c, function (err, data) {
            console.log('getData3');
            callback(null, data.toString());
        });
    },
    showResult: ['getData1', 'getData2', 'getData3', function (callback, result) {
        //console.log('getData1: '+ result.getData1 + ' getData2: ' + result.getData2 + ' getData3: ' + result.getData3);
        var txt = result.getData1 + result.getData2 + result.getData3 + '~~~~';
        fs.writeFile(d, txt, function (err) {
            callback(err, txt);
        });

    }],
    readResult: ['showResult', function (callback, result) {
        // console.log(result);
        fs.readFile(d, function (err, data) {
            callback(null, data.toString());
        });

    }]
}, function (err, result) {
    console.log(err);
    console.log(result);
});
