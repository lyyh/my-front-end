var name = 'The window';

var obj = {
	name: 'my object',
	getName: function(){
		return function(){
			this.name;
		}
	}
}

console.log(obj.getName()());

function a(){
	
	console.log(typeof arguments == 'array')
}
a()