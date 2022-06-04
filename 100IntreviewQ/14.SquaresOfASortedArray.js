var sortedSquares = function(nums) {
    // Square each value of the array and sort the values in non-decresing order simultaneously
    // Two pointers approach
    // Variables to store position and result in a new array
    // As they are sorted intially we set the position to equals to the length of the array and start adding from there
    // Change left and right pointers depending on wheter the current number is less or greater than the other
    let result = [];
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let position = rightPointer;

    while (leftPointer <= rightPointer) {
        if (nums[leftPointer] ** 2 > nums[rightPointer] ** 2) {
            result[position] = nums[leftPointer] ** 2;
            position--;
            leftPointer++;
        } else {
            result[position] = nums[rightPointer] ** 2;
            position--;
            rightPointer--;
        }
    }
    return result;
};
let nums = [-5, -3, -2, -1, 0, 3, 4];
sortedSquares(nums)