// Function.prototype.bind = function(that) {
//     var _this = this;
//     var args = Array.prototype.slice.call(arguments, 1);
//     return function() {
//         return _this.apply(that,args.concat(Array.prototype.slice.call(arguments,0)));
//     }
// }

// var test = function(a,b){
//     console.log('作用域绑定 '+ this.value)
//     console.log('testBind参数传递 '+ a.value2)
//     console.log('调用参数传递 ' + b)
// }
// var obj = {
//     value:'ok'
// }
// var fun_new = test.bind(obj,{value2:'also ok'})

// fun_new ('hello bind')
// 作用域绑定 ok
// testBind参数传递 also ok
// 调用参数传递  undefined

// function fn(){
//     console.log(Array.prototype.slice.call(arguments,1));
// }
// fn(123,123,123)
