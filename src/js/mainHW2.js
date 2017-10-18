  function countCheck(array) {
      var step = null;
          left = null;
          sum = 0;
          right = array[array.length - 1];

        
      array.forEach(function (key, num) {
          // console.log(key,num);
          if(left > key){
              sum = sum + (left - key)
          } else{
              left = key,
              step = num;
          }
      });

      for (i = array.length - 1; i > step; i--) {
         if( array[i] > right) {
             right = array[i];
         }  else{
             null;
         } 
          sum = sum - (array[step] - right);
      }

      return sum;
};

console.log(countCheck([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));
console.log(countCheck([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));
console.log(countCheck([7, 0, 1, 3, 4, 1, 2, 1]));
console.log(countCheck([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));
console.log(countCheck([2, 2, 1, 2, 2, 3, 0, 1, 2]));
console.log(countCheck([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]));
console.log(countCheck([2, 2, 2, 2, 2]));