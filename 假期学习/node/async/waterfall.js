/**
 * 所有函数正常执行，每个函数的结果都将变为下一个函数的参数。
 *
 * 注意，所有的callback都必须形如callback(err, result)，但err参数在前面各函数中无需声明，它被自动处理。
 */
var async = require('async');
var task = [function(cb) {
    var n = 0;
    cb(null, ++n);
}, function(n, cb) {
    cb(null, ++n);
}, function(n, cb) {
    cb(null, ++n);
}]

async.waterfall(task, function(err, result) {
    console.log(result)
})
