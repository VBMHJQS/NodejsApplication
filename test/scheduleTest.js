var schedule = require('node-schedule');
var date = new Date(2016,07,11,11,55,30);
console.log('schedule start...');
var j = schedule.scheduleJob(date,function() {
    console.log('The world is going to end today');
});
console.log('schedule end...');
