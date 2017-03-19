// var A = function() {
//     this.a = 1;
// }
// A.prototype.valueOf = function() {
//     console.log('A valueOf');
//     return this;
// }
// A.prototype.toString = function() {
//     console.log('A toString');
//     console.log(321);
// }
// var a = new A();


// var B = function() {
//     this.a = 1;
// }
// B.prototype.valueOf = function() {
//     console.log('B valueOf');
//     return this;
// }
// B.prototype.toString = function() {
//     console.log('B toString');
// }
// var b = new B();


var pro = String.prototype;

String.prototype.toString = function() {
    console.log('toString');
}
String.prototype.valueOf = function() {
    console.log('valueOf');
}

function Number(){
	console.log(213)
}
// function String(){
// 	console.log(111)
// }
// Number('123')
'2131' == 123
