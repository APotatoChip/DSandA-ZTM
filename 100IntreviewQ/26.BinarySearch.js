var binarySearch = function(nums, target) {
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
};
console.log(binarySearch([1, 3, 5, 7, 8, 9], 8));