var fs = require('fs');
var async = require('async');

var a = 'F:\\a.txt';
var b = 'F:\\b.txt';
var c = 'F:\\c.txt';

async.auto({
    getData1: function(callback) {
        fs.readFile(a, function(data, err) {
            console.log('getData1');
            callback(err, data);
        });
    },
    getData2: function(callback) {
        fs.readFile(b, function(err, data) {
            console.log('getData2');
            callback(err, data);
        });
    },
    getData3: function(callback) {
        fs.readFile(c, function(err, data) {
            console.log('getData3');
            callback(err, data);
        })
    },
    showResult: ['getData1', 'getDate2', 'getDate3', function(callback) {
        // console.log(results.getData1);
        // console.log(callback);
        console.log(123);
        callback(null,'end');
    }]
}, function(err, result) {
    console.log(err);
    console.log(result);
});
