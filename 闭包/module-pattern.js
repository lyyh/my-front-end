var myNameSpace = (function(){
	var privateVarible = 1;
	var privateFun = function(){
		return ++privateVarible;
	}

	return{
		publicFun: function(){
			return privateFun()
		}
	}
})();

var result = myNameSpace.publicFun();
console.log(result)
