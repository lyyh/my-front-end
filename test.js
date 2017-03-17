// Object.prototype.clone = function(){
// 	var Constructor = this.constructor;
// 	var obj = new Constructor();

// 	for(var attr in this){
// 		if(this.hasOwnProperty(attr)){
// 			if(typeof this[attr] !== 'function'){
// 				if(this[attr] === null){
// 					obj[attr] = null;
// 				}else{
// 					obj[attr] = this[attr].clone();
// 				}
// 			}
// 		}
// 	}

// 	return obj;
// }

// var a = {a:1,b:{a:1},fn:function(){
// 	console.log(123)
// }};
// var result = a.clone();
// console.log(result)

// Array.prototype.clone = function() {
//     var thisArr = this.valueOf();
//     var newArray = [];
//     for (var i = 0; i < thisArr.length; i++) {
//         if (Object.prototype.toString.call(thisArr[i]) === '[object Array]') {
//             newArray.push(thisArr[i].clone());
//         } else {
//         	newArray.push(thisArr[i])
//         }
//     }
//     return newArray;
// }

// var a = [1, 2, [1, 2]];
// var result = a.clone()
// console.log(result)

var src = {a:1,b:{c:1}};
var target = Object.assign({},src);
console.log(target.b === src.b)