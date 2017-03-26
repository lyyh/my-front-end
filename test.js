// var str = '5+3*3';
// var symbol = str.match(/[\+\-\*]/ig);
// var array = str.split(/[\+\-\*]/ig);
// var result = 0;
// result += parseFloat(array[0]);

// for (var i = 1; i < array.length; i++) {
//     switch (array[i]) {
//         case '+':
//             result += parseFloat(array[i + 1]);
//             break;
//         case '-':
//             result -= parseFloat(array[i + 1]);
//             break;
//         case '*':
//             result *= parseFloat(array[i + 1]);
//             break;
//     }

//     console.log(result)
// }


// function unique(array){
//     var n = [];//临时数组
//     for(var i = 0;i < array.length; i++){
//         if(n.indexOf(array[i]) == -1) n.push(array[i]);
//     }
//     return n;
// }
// var b = {a:1}
// var a = unique([NaN,NaN,NaN]);
// console.log(a)

function distinct(arr) {
    var obj = {},
        i = 0,
        len = 0,
        ret = [];
    if (Array.isArray(arr) && arr.length > 0) {
        len = arr.length;
        for (i = 0; i < len; i += 1) {
            obj[arr[i]] = arr[i];
        }
        
        for(var prop in obj){
        	if(obj.hasOwnProperty(prop)){
        		ret.push(prop)
        	}
        }
    }
    return ret
}  


console.log(distinct([1,2,3,4,'1','2']))
