var str = '5+3*3';
var symbol = str.match(/[\+\-\*]/ig);
var array = str.split(/[\+\-\*]/ig);
var result = 0;
result += parseFloat(array[0]);

for (var i = 1; i < array.length; i++) {
    switch (array[i]) {
        case '+':
            result += parseFloat(array[i + 1]);
            break;
        case '-':
            result -= parseFloat(array[i + 1]);
            break;
        case '*':
            result *= parseFloat(array[i + 1]);
            break;
    }

    console.log(result)
}
