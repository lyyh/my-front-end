var a = {
    a: 1,
    valueOf:function(){
    	a = 2;
    	return 1;
    },
    toString:function(){
    	a = 3;
    	return 3;
    }
}
console.log(a==1)
