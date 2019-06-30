var Q = require('q');
var fs = require('fs');

function readFile(callback) {
    var deferred = Q.defer();
    fs.readFile('promiseTest.js', function (err, data) {
        if (err) {
            deferred.reject(err);
        } else {
            console.log(data);
            deferred.resolve(data);
        }
    });
    return deferred.promise.nodeify(callback);
}

readFile(function () {
    console.log(123);
})
