let async = require('async');
let EventProxy = require('eventproxy');
let ep = new EventProxy();
let amounts = [];
for (let i = 1; i <= 10; i++) {
    amounts.push(i);
}

let count = 0;
async.mapLimit(amounts, 5, function(amount, callback) {
    (function(cb) {
        count++;
        console.log('当前并发数 ' + count);
        setTimeout(function() {
            count--;
            console.log(amount)
            ep.emit('a', amount);
            cb(null, amount)
        }, 1000);
    })(callback)
}, function(err, result) {})


ep.after('a', 10, function(result) {
    console.log(result)
})
