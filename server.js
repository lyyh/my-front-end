var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var n = -1; // 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
var length = -1;

rl.on('line', function(line) { // javascript每行数据的回调接口
    var input = line.split('');
    var sum = input[0] - '0';
    for (var  i = 1; i < input.length; i++) {
        switch (input[i]) {
            case '+':
                sum = sum + (input[i + 1] - '0');
                break;
            case '-':
                sum = sum - (input[i + 1] - '0');
                break;
            case '*':
                sum = sum * (input[i + 1] - '0');
                break;
        }
    }
    console.log(sum)
});
