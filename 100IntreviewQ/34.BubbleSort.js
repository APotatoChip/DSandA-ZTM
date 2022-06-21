const bubbleSort = function(arr) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) { // the biggest num is going to the end 
            // so we reduce the length
            if (arr[j] > arr[j + 1]) {
                // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const bubbleSortRecursive = function(arr) {
    var shouldSort = false;

    for (let i = 0; i < arr.length - 1; i++) {
        let curr = arr[i];
        if (curr > arr[i + 1]) {
            arr[i] = arr[i + 1];
            arr[i + 1] = curr;
            shouldSort = true;
        }
    }

    if (shouldSort) {
        bubbleSortRecursive(arr);
    }
}



console.log(bubbleSortRecursive([7, 18, 5, 2, 34, 55, 1, 6]));