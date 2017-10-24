

Array.prototype.myForEach = function (callback , arr) {

        var self = this.length;

        var i = 0;

        while (i <= self - 1) {

            callback(this[i], i, this);

            i++;
        }

};


var array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

array.myForEach(function (num, index) {
    console.log( num, index);
});



