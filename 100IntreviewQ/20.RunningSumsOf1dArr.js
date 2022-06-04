var runningSum = function(nums) {

    let arr = [];
    let n = nums.length;
    let prev = nums[0];
    arr[0] = prev;
    if (n == 1) {
        return arr;
    }
    for (let i = 1; i < n; i++) {
        prev = sumPrevPlusCurr(prev, nums[i]);
        arr[i] = prev;

    }

    function sumPrevPlusCurr(p, c) {
        return p + c;
    }
    return arr;
};
let nums = [1, 2, 3, 4]
runningSum(nums);