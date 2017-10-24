var array = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]



Array.prototype.myForEach = function (callback , arr) {

    var self = this.length;

    var i = 0;

    while (i <= self - 1) {

        callback(this[i], i, this);

        i++;
    }

};




array.myForEach(function (num, index) {
   // console.log( num, index);
});






Array.prototype.myMap = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
        throw new TypeError(' this is null or not defined');
    }

    var O = Object(this);

    var len = O.length >>> 0;

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
        T = thisArg;
       // console.log(thisArg);
    }

    A = new Array(len);


    k = 0;

    while (k < len) {

        var kValue, mappedValue;

        if (k in O) {

            kValue = O[k];

            mappedValue = callback.call(T, kValue, k, O);

            A[k] = mappedValue;
        }

        k++;
    }

    return A;
};


var roots = array.myMap(Math.sqrt);

console.log(roots);



function mySort (){

}

console.log()