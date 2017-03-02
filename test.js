var obj = { a:1, arr: [2,3] };

// var shadowObj = shadowCopy(obj);

// function shadowCopy(src){
// 	var dst = {};
// 	for(var prop in src){
// 		if(src.hasOwnProperty(prop)){
// 			dst[prop] = src[prop]
// 		}
// 	}
// 	return dst;
// }

// console.log(shadowObj)
// 
var result = Object.assign({},obj);
console.log(result)