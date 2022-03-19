// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.
// Time Complexity : O(n)
// Space Complexity: O(n)

var sortedSquares = function(nums) {
    let result = [];
    // left and right pointer
    let l = 0;
    let r = nums.length - 1;
    // position to add squared number to res
    let p = r;

    //add the higher number to the array and then decrease the pointer
    while (l <= r) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            result[p] = nums[l] ** 2;
            p--;
            l++;
        } else {
            result[p] = nums[r] ** 2;
            p--;
            r--;
        }
    }

    return result;
};

nums = [-4, -1, 0, 3, 10];
var res = sortedSquares(nums);

console.log(res);