var A = [3, 2, 4];
var B = [6, 5, 8];
var x = 4;
var y = 8;

var ARET = A.map(function(value, index) {
    if (value >= x) {
        return index;
    }
})
var BRET = B.map(function(value, index) {
    if (value >= y) {
        return index;
    }
})

// console.log(ARET)
// console.log(BRET)
var array = ARET.filter(function(value, index) {
    if (value !== undefined) {
        for (var i = 0; i <= BRET.length; i++) {
            if (BRET[i] !== 'undefined') {
                if (value === BRET[i]) {
                    return true;
                }
            }
        }
    }

    return false;
});

console.log(array.length)
