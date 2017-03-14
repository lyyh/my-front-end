 function Fib(n) {
     return n < 2 ? n : (Fib(n - 1) + Fib(n - 2));
 }
 // console.log(Fib(40))
 postMessage({result:Fib(40)})
