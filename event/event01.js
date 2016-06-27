// 引入 events 模块
var events = require('events');

// 创建eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 绑定事件并处理
//eventEmitter.on('eventName',eventHandler);
// 触发事件
//eventEmitter.emit('eventName');

// 创建时间处理程序
var connectHandler = function connected(){
  console.log('连接成功');
  // 出发data_received 事件
  eventEmitter.emit('data_received');
}
//绑定connection事件
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function(){
  console.log('数据接受成功');
});
eventEmitter.emit('connection');
console.log('程序执行完毕');
