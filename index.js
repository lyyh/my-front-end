//使用apply延迟绑定this，实现bind函数的参数预绑定
//缺点:不能再对绑定的函数进行传参，即在绑定函数的时候就确定了传参
// Function.prototype.testBind = function() {
//     var _this = this,
//         slice = Array.prototype.slice,
//         args = slice.call(arguments, 1);
//     return function() {
//         return _this.apply(that, args);
//     }
// }

//动态参数
//在原来的基础上进行了改进，可以对绑定函数传入参数。不能覆盖之前静态绑定的参数  
// Function.prototype.testBind = function(that) {
//     var _this = this,
//         slice = Array.prototype.slice,
//         args = slice.call(arguments, 1);
//     return function() {
//         return _this.apply(that,
//             args.concat(args, Array.prototype.slice.call(arguments)));
//     }
// }

//使用new关键字实例化之后，需要继承原型函数，原先绑定的this对象就会发生改变。因为this指向了一个新的对象。
//使用中转函数传递原型链
Function.prototype.testBind = function(that) {
    var _this = this,
        slice = Array.prototype.slice,
        args = slice.call(arguments, 1),
        fNOP = function() {},
        bound = function() {
            return _this.apply(that,
                args.concat(args, Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = _this.prototype;
    bound.prototype = new fNOP();
    return bound;
}

function A(param1, param2) {
    console.log(param1);
    console.log(param2);
    this.a = 1;
    this.b = 2;
}

var a1 = A.bind({ a: 3, b: 4 }, 1, 2);
console.log(new a1()); //new关键字相当于创建一个新函数，执行当前构造函数，然后再将this重新指向  

