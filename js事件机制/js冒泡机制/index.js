//司徒正美 事件代理
var delegate = function(client,clientMethod){
	return function(){
		return clientMethod.apply(client,arguments);
	}
}

var ClassA = function(){
	var _color = 'red';
	return {
		getColor: function(){
			console.log('Color',_color);
		},
		setColor: function(color){
			_color = color;
		}
	}
}

var a = new ClassA();
a.getColor();
a.setColor('red');
a.getColor();
console.log("执行代理！");
var d = delegate(a,a.setColor);
d('blue');
console.log('执行完毕!');
a.getColor();