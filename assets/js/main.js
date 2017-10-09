
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}


    var array1 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
        array2 = [-1,-8,-2];
        array3 = [1,7,3];
        array4 = [1,undefined,3,5,-3];
        array5 = [1,NaN,3,5,-3];



    function arrayCheck(count){
        var max = Number.NEGATIVE_INFINITY ;
        var min= Number.POSITIVE_INFINITY ;
        var sum = 0;

        for(var i = 0; i < count.length; i++){

            if( typeof (count[i]) !== 'undefined' && !isNaN(count[i])){
                if(max < count[i]) max = count[i];
                if(min > count[i]) min = count[i];
                sum = sum + count[i];
            }
        }

        return {
            'max': max,
            'min': min,
            'sum': sum
        }

    }

    console.log(arrayCheck(array1));
    console.log(arrayCheck(array2));
    console.log(arrayCheck(array3));
    console.log(arrayCheck(array4));
    console.log(arrayCheck(array5));

