var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1', {});
client.on("error", function (err) {
    console.log("Error " + err);
});
client.on("connect", runSample);

function runSample() {
    var key = "contract:test:key";
    client.sadd(key, 'uid');
    client.sadd(key, "a");
    client.sadd(key, "b");
    // 获取key集合中是否包含“1”，如果包含，返回1，否则返回0
    client.sismember(key, "a", function showData(err, data) {
        if (err) {
            console.log("err:" + err);
        } else {
            console.log("reply:" + data);
        }
    });

}
