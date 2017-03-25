 function a(len) {
     var i, j;
     var arr = [],ret = 0;

     for (i = 1; i < len; i++) {
         for (j = 2; j < i; j++) {
             if (i % j === 0) {
                 break;
             }
         }

         if (i <= j && i != 1) {
             arr.push(i);
         }
     }

     arr.forEach(function(value) {
         var other = len - value;
         for (k = 2; k < other; k++) {
             if (other % k === 0) {
                 break;
             }
         }

         if(k == other){
         	ret++;
         }
     })

     return ret++;

 }


 // console.log(a(10))
