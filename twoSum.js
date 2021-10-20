var twoSum = function(nums, target) {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices.has(complement)) {
            return [indices.get(complement), index]
        }

        indices.set(nums[index], index)
    }
};

// var twoSum = function(nums, target) {
//     const indices = {};

//     nums.forEach((item, index) => {
//         indices[item] = index
//     });

//     for (let index = 0; index < nums.length; index++) {
//         const complement = target - nums[index];

//         if (indices[complement] !== undefined && indices[complement] !== index) {
//             return [index, indices[complement]]
//         }
//     }
// };


// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// };

// function twoSum(nums, target) {

//     let initial = Array.from(nums);
//     let newNums = initial.sort((a, b) => a - b);
//     let left = 0;
//     let right = nums.length - 1;
//     let sum = 0;
//     while (left < newNums.length && right >= 0) {
//         sum = newNums[left] + newNums[right]
//         if (sum == target) {
//             console.log(nums)
//             let first = nums.findIndex((el) => el == newNums[left]);
//             nums.splice(first, 1, 'used');
//             let second = nums.findIndex((el) => el == newNums[right]);
//             console.log(first, second);
//             return [first, second];
//         } else if (sum > target) {
//             right--;
//         } else {
//             left++;
//         }
//     }
// }

twoSum([3, 2, 4], 6);
twoSum([2, 7, 11, 15], 9);