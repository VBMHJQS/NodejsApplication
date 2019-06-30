var redis = require("redis");
var client = redis.createClient(6379, '127.0.0.1', {});
client.on("error", function (err) {
    console.log("Error " + err);
});
client.on("connect", runSample);

function runSample() {

    // 设置一个字符串类型的值，返回值：OK
    client.set("string key", "Hello World", function (err, reply) {
        console.log(reply.toString());
    });
    client.get("wxc", function (err, reply) {
        if (err) {
            console.log(err);
        } else {
            client.set("wxc", "this is test", function (err, reply) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(reply);
                }
            });
        }
    });
}
