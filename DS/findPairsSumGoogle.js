//Brite Force with two for loops sumsing each value with each works but is O(n^2)



// function findPairSum(arr, s) {
//     let t0 = performance.now();
//     let arrL = arr.length - 1;
//     let sum = 0;
//     let i = 0;
//     while (i < arrL) {
//         sum = arr[i] + arr[arrL];
//         if (sum === s) {
//             return true;
//         } else if (sum < s) {
//             i++;
//         } else {
//             arrL--;
//         }
//     }
//     let t1 = performance.now();
//     let t = t1 - t0;
//     console.log(t);
//     return false;
// }

function findPairSum(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}

findPairSum([1, 1, 1, 1, 1, 2, 3, 5, 9, 11, 12], 8);

findPairSum([1, 1, 1, 1, 1, 2, 3, 5, 9, 11, 12], 8) // true
findPairSum([1, 1, 1, 1, 1, 2, 3, 9, 11, 12], 8) // false
findPairSum([1, 1, 1, 1, 1, 2, 3, 5], 8) // true
findPairSum([1, 2, 4, 4], 8); // true
findPairSum([1, 2, 3, 9], 8); // false;

//O(n) but not memory efficient