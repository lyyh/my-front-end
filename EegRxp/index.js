// var str = 'aabdc123';
// var cost = 'It costs $12.5';
// // console.log(/\d\d/.exec(str))
// // console.log(str.t(/[a]{1}/))
// console.log(/\d+\.\d$/.test(cost))
// var str1 = 'asd by goooooooogle';
// console.log(str1.match(/go{2,8}gle/))

// var str = "Let's go go go go";
// console.log(str.match(/(go\s*)+/))
var str = '￥20.5 ￥10.2';
console.log(str.match(/^￥(\d+\.\d+)/))