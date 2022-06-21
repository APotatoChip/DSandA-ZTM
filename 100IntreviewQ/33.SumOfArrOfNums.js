const sumOfNums = function(arr) {
    if (arr.length == 1) {
        return arr[0];
    }
    return arr[arr.length - 1] + sumOfNums(arr.splice(0, arr.length - 1));
}

sumOfNums([1, 2, 3, 4, 5]);
// 1 + 2 + 3 + 4 + 5