// Object.prototype.clone = function() {
//     var str, newobj = this.constructor === Array ? [] : {};
//     if (typeof this !== 'object') {
//         return;
//     } else {
//         for (var i in this) {
//             if (i !== 'clone') {
//                 newobj[i] = typeof this[i] === 'object' ?
//                     cloneObj(this[i]) : this[i];
//             }
//         }
//     }
//     return newobj;
// };

// var A = function() {}
// A.prototype.a = 1;
// var a = new A();
// console.log(new Date().clone())

function cloneObj(obj) {
    var str, newObj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (JSON) {
        str = JSON.stringify(obj);
        newObj = JSON.parse(str);
    } else {
        for (var attr in obj) {
            newObj[attr] = typeof obj[attr] === 'object' ? cloneObj(obj[attr]) : obj[attr];
        }
    }
    return newObj;
}

console.log(cloneObj({ a: { a: 1 } }));
