var fs = require('fs');
var path = require('path');
var filePath = 'F:\\20160622';



function init() {
    var temp = filePath + path.sep + '20160621.log';
    readFile(temp, watchFile);
}

function watchFile(filePath) {
    fs.watch(filePath, function(even, filename) {
        console.log(even + ' ' + filename);
    });
}

function readFile(filePath, callback) {
    fs.readFile(filePath + path.sep + filename, function(data) {
        console.log(data);
        callback(filePath);
    });
}

watchFile(filePath);
