/**
 * 利用generator实现斐波那契数列
 */

function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

let foo = fibonacci();
for (let n of foo) {
    if (n > 1000) break;
    console.log(n)
}
