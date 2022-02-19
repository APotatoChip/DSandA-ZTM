// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    if (nums.length == 1) {
        if (target > nums[0]) {
            return 1;
        } else {
            return 0;
        }
    }

    return recursionHelper(nums, target, left, right);

    function recursionHelper(nums, target, left, right) {
        let midIdx = Math.ceil((left + right) / 2);
        let potentialMatch = nums[midIdx];

        // Base Condition
        if (left >= right) {
            if (potentialMatch == target) {
                return midIdx;
            }
            if (potentialMatch < target) {
                return midIdx + 1;
            } else {
                if (midIdx == 0) {
                    return 0;
                }
                return midIdx;

            }
        }


        if (target === potentialMatch) {
            return midIdx;
        }

        if (target > potentialMatch) {
            left = midIdx + 1;
            return recursionHelper(nums, target, left, right);
        } else {
            right = midIdx - 1;
            return recursionHelper(nums, target, left, right);
        }
    }

};

searchInsert([1, 3, 5], 4)