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
    console.log( num, index);
});





function myMap (){

}

function mySort (){

}

console.log()