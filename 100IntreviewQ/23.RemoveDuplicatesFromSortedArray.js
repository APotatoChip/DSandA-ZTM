// input: integer array - sorted in non-decreasing order
// remove the duplicates
// modify the input array in place with O(1) extra memory
// result should be places in the first part of the array nums
// output: return length of the new arr

//  Time Complexity - O(n^2)
//  Space Complexity - O(1)
// Brute Force Solution 
var removeDuplicates = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                nums.splice(j, 1); // Worst case O(n);
                j--;

            }
        }
    }
    return nums.length;

};

// Refactored without the nested loop
var removeDuplicates1 = function(nums) {

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1); // Worst case O(n);
            i--;
        }

    }
    // console.log(nums);
    return nums.length;

};

// Best solution
var removeDuplicates3 = function(nums) {
    var len = nums.length;
    var last = NaN;
    var count = 0;
    for (var i = 0; i < len; i++) {
        if (nums[i] !== last) {
            nums[count] = nums[i];
            last = nums[i];
            count++;
        }
    }
    return count;
};




let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);