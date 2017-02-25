var foo = 'get-element-by-id';

function convertTouFeng(foo) {
    var findStr = foo.match(/-\w/g);
    findStr.forEach(function(value) {
        var upperChar = value.match(/\w/g)[0].toUpperCase();
        foo = foo.replace(value, upperChar);
    })
    return foo;
}

console.log(convertTouFeng(foo))
