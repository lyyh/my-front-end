var a = 1;

function test() {
    var b = 2;
    console.log(a)

    function test1() {
        console.log(b)
        console.log(a);
    }
    test1()
}
test()
