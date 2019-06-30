/**
 * 串行无关联
 */
console.time('series');
var async = require('async');

async.series({
    one: function (done) {
        //处理逻辑
        done(null, 'one');
    },
    two: function (done) {
        //处理逻辑
        done('myerror', 'tow');
    },
    three: function (done) {
        //处理逻辑
        done(null, 'three');
    },
    four: function (done) {
        //处理逻辑
        done(null, 'four');
    }
}, function (error, result) {
    console.log('one:', result.one);
    console.log('two:', result.two);
    console.log('three:', result.three);
    console.log('four:', result.four);
    console.timeEnd('series');
})
