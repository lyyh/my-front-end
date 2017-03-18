var a = new Promise(function(resolve, reject) {
    resolve(1)
})

a.then(function(val) {
    console.log(val)
})

//不会进入异步队列，而是咋
process.nextTick(function() {
    console.log(3)
})

setImmediate(function() {
    console.log(5)
});

setTimeout(function() {
    console.log(4)
}, 0)

console.log(2)
