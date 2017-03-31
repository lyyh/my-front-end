var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var n, q;
var A = null;
var B = null;
var cur_line = 0;
var retArray = [];

rl.on('line', function(line) { // javascript每行数据的回调接口
    var x, y;
    var datas = line.split(' ');
    switch (cur_line) {
        case 0:
            n = datas[0];
            q = datas[1];
            cur_line++;
            break;
        case 1:
            A = Array.prototype.slice.apply(datas, [0, n]);
            cur_line++;
            break;
        case 2:
            B = Array.prototype.slice.apply(datas, [0, n]);
            cur_line++;
            break;
        default:
            x = datas[0];
            y = datas[1];

            var ARET = A.map(function(value, index) {
                if (value >= x) {
                    return index;
                }
            })
            var BRET = B.map(function(value, index) {
                if (value >= y) {
                    return index;
                }
            })

            var num = ARET.filter(function(value, index) {
                if (value !== undefined) {
                    for (var i = 0; i <= BRET.length; i++) {
                        if (BRET[i] !== undefined) {
                            if (value === BRET[i]) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            }).length;

            retArray.push(num);
            --q;
            if(q===0){
                 retArray.forEach(function(value,index){
                    console.log(value)
                })
            }
    }
});
