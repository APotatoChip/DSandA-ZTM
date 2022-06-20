const insertionSort = function(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            // move number to the first position using unshift
            // and taking the first item or the returned array
            // with deleted numbers using splice
            arr.unshift(arr.splice(i, 1)[0]);
        } else {
            // find where the number should go
            for (let j = 1; j < i; j++) {
                if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
                    // move number to the right spot
                    // splice used for deleting the number and moving it to
                    // the right location afterwards without deleting the element on that index
                    arr.splice(j, 0, arr.splice(i, 1)[0]);
                }
            }
        }
    }
}

let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(array);