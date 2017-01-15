function Polygon(sides){
	if(this instanceof Polygon){
		this.sides = sides;
		this.getArea = function(){
			return 0;
		}
	}else{
		return new Polygon(3);
	}
}

function Rectangle(width,length){
	Polygon.call(this,2);
	this.width = width;
	this.length = length;
	this.getArea = function(){
		return width * length;
	}
}

Rectangle.prototype = new Polygon();
var rec = new Rectangle(10,20);
console.log(rec instanceof Polygon);
console.log(rec.getArea()) 