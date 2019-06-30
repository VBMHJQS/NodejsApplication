var async = require('async');
console.time('auto');
async.auto({
    getData: function (callback) {
        setTimeout(function () {
            console.log('1.1: got data');
            callback(null, 'mydata');
        }, 300);
    },
    makeFolder: function (callback) {
        setTimeout(function () {
            console.log('1.1: made folder');
            callback(null, 'myfolder');
        }, 200);
    },
    writeFile: ['getData', 'makeFolder', function (callback) {
        setTimeout(function () {
            console.log('1.1: wrote file');
            callback(null, 'myfile');
        }, 300);
    }],
    emailFiles: ['writeFile', function (callback, results) {
        console.log('emailed file: ', results.writeFile);
        callback(null, results.writeFile);
    }]
}, function (err, results) {
    console.log('err: ', err);
    console.log('results: ', results);
    console.timeEnd('auto');
});
