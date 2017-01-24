//模拟next
let makeIterator = array => {
	let nextIndex = 0;
	return {
		next(){
			return nextIndex < array.length?
			{value: array[nextIndex++],done:false}:
			{value:undefined,done:true};
		}
	}
}
let params = [1,2,3]
let it = makeIterator(params);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


//类部署Iterator
class RangIterator{
	constructor(start,stop) {
		this.value = start;
		this.stop  = stop;
	}

	[Symbol.iterator]()
}


