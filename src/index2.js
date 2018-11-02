function isAllTrue(array, fn) {
}

arr1 = [1, 8, 20, 47, 34];


var arr2 = arr1.filter(function (item) {
    return item > 10;
});

console.log(arr2);



var arr1 = [1, 8, 20, 47, 34];

var filt_func = function(item) {
    return item > 10;
};

isAllTrue(arr1, filt_func);