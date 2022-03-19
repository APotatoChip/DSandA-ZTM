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


let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;