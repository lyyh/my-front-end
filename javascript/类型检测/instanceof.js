//直接原型继承关系
function Animal(){}
console.log((new Animal) instanceof Animal)
//原型链上的简介原型
function Cat(){}
Cat.prototype = new Animal
console.log((new Cat) instanceof Animal )

