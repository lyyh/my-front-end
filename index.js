function foo() {
    var a = 2;

    function test1() {
        var c = 100;

        return function test2() {
            console.log(a);
            console.log(c);
            return true;
        };
    }

    return function bar() {
        var b = 9;

        function cc() {
            console.log(1111);
            test1();
        }

        return function fn() {
//             console.log(a,b);
            console.log(b);
            cc();
//             test1();
//             return test1;
        }
    }
}

var bar = foo();
var fn = bar();
fn();
// var test1 = fn();
// var test2 = test1();
// test2();