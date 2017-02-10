// let gen = function*() {
//     this.a = 1;
//     yield this.b = 2;
//     yield this.c = 3;
// }
// let F = function(){
// 	return gen.call(gen.prototype);
// }
// let f = new F();
// console.log(f.next())
// console.log(f.next())
function B() {
    return {
        b: 1
    }
}
var b = new B();
