var rotate = function(nums, k) {
    if (nums === null || nums.length === 0) {
        return;
    }
    k = k % nums.length;
    if (k === 0) {
        return;
    }
    nums.reverse();
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    // T.C: O(N)
    // S.C: O(1)
};

const reverse = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++, end--;
    }
}

/*
Solution:
1. Reverse the entire array.
2. Reverse the first k elements.
3. Reverse the rest.
*/

// var rotate = function(nums, k) {
//     while (k >= 1) {

//         let item = nums.pop();
//         let arr = nums;
//         nums = [];
//         let arr1 = [];
//         arr1.push(item);
//         let arr2 = arr1.concat(arr);
//         nums = arr2;
//         k--;
//     }
//     return nums;
// }




rotate([1, 2, 3, 4, 5, 6, 7], 3)


// var rotate = function(nums, k) {
//     for (let i = k; i >= 1; i--) {
//         let item = nums.pop();
//         nums.unshift(item);
//     }
//     return nums;
// };

// //Doesnt work for bigger arrs

// var rotate = function(nums, k) {
//     let index = nums.length - k;
//     let lastElements = nums.splice(index, k);

//     return lastElements.concat(nums);
// };