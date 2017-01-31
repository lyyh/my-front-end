function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}
var obj = { a: 1, b: 2, c: 3 };
for (let [key, value] of entries(obj)) {
    console.log(key + "->" + value)
}