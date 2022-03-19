var moveZeroes = function(nums) {
    let idxForNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[idxForNonZero], nums[i]] = [nums[i], nums[idxForNonZero]];
            idxForNonZero++;
            // no need to check the swapped number because we are scanning through the array from the left so it is guaranteed that 
            // the element at the idxForNonZero is zero (not non-zero).
        }
    }
    return nums;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};
let nums = [0, 1, 0, 3, 12]
moveZeroes(nums);