var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var n = -1; // 初始状态为负数，表示还没开始读取
var length = -1;

rl.on('line', function(line) { // javascript每行数据的回调接口
    if (n === -1) {
        length = parseInt(line.trim());
        n++;
    } else {
        var data = line.split(' ');
        var array = [];
        for (var i = 0; i < length; i++) {
            if (array.indexOf(data[i]) === -1) {
                array.push(data[i]);
            } else {
                var index = array.indexOf(data[i]);
                array.splice(array.indexOf(data[i]), 1);
                array.push(data[i]);
            }
        }
        var ret = '';
        for (var j = 0; j < array.length; j++) {
            if (j === array.length - 1) {
                ret += array[j]
            } else {
                ret += array[j] + ' ';
            }
        }
        console.log(ret);
    }
});
