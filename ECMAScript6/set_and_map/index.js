let s = new Set();
[1,2,3,4].forEach(item => s.add(item));
for(let i of s){
	console.log(i)
}

let items = new Set([1,2,3,4,5,6,7]);
console.log([...items])

