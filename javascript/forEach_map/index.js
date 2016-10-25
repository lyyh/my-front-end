var originArray = [1,4,2,5,6,2];

//返回一组原数据的映射
var mapResult = originArray.map(function(item){
	return item*2
})
console.log('---------mapResult--------');
console.log(mapResult)

//得到最后的返回结果，累计
var reduceResult = originArray.reduce(function(itemVal,item){
	console.log("itemVal:" + itemVal)
	console.log("item:" + item)
	return itemVal + item;
})
console.log('---------reduceResult--------');
console.log(reduceResult)

//返回一组满足条件的结果
var filterResult = originArray.filter(function(item){
	return item >= 4;
})
console.log('---------filterResult--------');
console.log(filterResult)

//检测数组中的每一项是否符合条件
var everyResult = originArray.every(function(item,index){
	return item < 0;
})
console.log('---------everyResult--------');
console.log(everyResult)
//检测数组中的某些项是否符合条件
var someResult = originArray.some(function(item,index){
	return item > 5;
})
console.log('---------someResult--------');
console.log(someResult)



