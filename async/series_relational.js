/**
 * 串行有关联
 * 每一步执行的时需要上一步的结果当参数，每一步必须串行等待
 */
var async = require('async');

console.time('waterfall');
async.waterfall([
    function (callback) {
        callback(null, 'one');
    },
    function (onearg, callback) {

        callback('null', onearg + '| two');
    },
    function (twoarg, callback) {

        callback(null, twoarg + '| three');
    },
    function (threearg, callback) {

        callback(null, threearg + '| four');
    },
    function(fourarg,callback){
      callback(null,fourarg + '| five')
    }
], function (error, result) {
    console.log(error);
    console.log(result);
    console.timeEnd('waterfall');
})
