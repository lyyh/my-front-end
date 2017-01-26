let A = [1, 2, 1, 1, 2, 3];

console.time();
let removeDuplicates = array => {
    let hashmap = new Map();
    for (let i = 0; i < array.length; i++) {
        if (hashmap.has(array[i])) {
            hashmap.set(array[i], function(count) {
                if (count + 1 > 2) {
                    return count;
                }
                return count + 1;
            }(hashmap.get(array[i])));
        } else {
            hashmap.set(array[i], 1);
        }
    }

    let length = 0;
    for(let value of hashmap.values()){
    	length += value; 
    }
    return length;
}
removeDuplicates(A)
console.timeEnd();