console.log(1111);

    var array1 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
    var array2 = [-1,-8,-2];
    var array3 = [1,7,3];
    var array4 = [1,undefined,3,5,-3];
    var array5 = [1,NaN,3,5,-3];




function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}


var index, len;
var sumarray = [array1,array2,array3,array4,array5];
for (index = 0, len = sumarray.length; index < len; ++index) {
    console.log(sumarray[index]);

}
