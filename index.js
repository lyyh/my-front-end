var str = 'abccbbca';

function getMaxLength(str) {
    var first = 0,
        array = str.split(''),
        len = str.length;
    while (len - 1 - first > 0) {
        for (var last = len - 1; last >= first; last--) {
        	var subStr = str.subStr(first,last);
        }
        first++;
    }
}
