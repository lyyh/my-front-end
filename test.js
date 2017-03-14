var a = Object.create({b:1},{
	bar:{
		set: function(val){
			this.a = val;
		},
		get: function(){
			return this.a
		},
		enumerable: true
	}
})

for(var i in a){
	console.log(i)
}

