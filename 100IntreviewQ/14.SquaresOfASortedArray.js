var sortedSquares = function(nums) {
    let result = [];
    let l = 0;
    let r = nums.length - 1;
    let p = r;

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
let nums = [-5, -3, -2, -1];
sortedSquares(nums)