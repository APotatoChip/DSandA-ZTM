//704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
//  If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    return recursion(nums, target, left, right);

    function recursion(nums, target, left, right) {

        if (left > right) {
            return -1;
        }

        let mid = Math.floor((left + right) / 2);
        let potentialMatch = nums[mid];

        if (potentialMatch === target) {
            return mid;
        } else if (potentialMatch > target) {
            right = mid - 1;
            return recursion(nums, target, left, right);
        } else {
            left = mid + 1;
            return recursion(nums, target, left, right);
        }
    }

}

search([-1, 0, 3, 5, 9, 12], 9);