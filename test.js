// Object.prototype.clone = function () {
//     var Constructor = this.constructor;
//     var obj = new Constructor();

//     for (var attr in this) {
//         if (this.hasOwnProperty(attr)) {
//             if (typeof(this[attr]) !== "function") {
//                 if (this[attr] === null) {
//                     obj[attr] = null;
//                 }
//                 else {
//                     obj[attr] = this[attr].clone();
//                 }
//             }
//         }
//     }
//     return obj;
// };

// var ret = { a: new Date, b: { c: {} } }.clone();
// console.log(ret);

// var a = 1;
// console.log(a.constructor)
// console.log(new a.constructor)
