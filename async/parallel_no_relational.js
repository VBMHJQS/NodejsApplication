/**
 * 并行无关联
 * 同时并行处理每一个流程,最后汇总结果,如果某一个流程出错就退出
 */
var async = require('async');
console.time('parallel');
async.parallel({
    oneClass: function(done) {
        done(null, 'oneClass');
    },
    twoClass: function(done) {
        done('myerror', 'twoClass');
    },
    threeClass: function(done) {
        done(null, 'threeClass');
    }
}, function(error, result) {
    console.log('one:', result.oneClass);
    console.log('two:', result.twoClass);
    console.log('three:', result.threeClass);
    console.timeEnd('parallel');
});
