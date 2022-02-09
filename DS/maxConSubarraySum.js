// var maxSubarray = function(nums) {
//     let nextSum = 0;
//     let maxSum = -Infinity;
//     let maxN = 0;
//     let maxSet = [];
//     for (let i = 0; i < nums.length; i++) {
//         let curr = nums[i];
//         maxSum = curr;
//         maxN = 1;
//         nextSum = curr;
//         for (let j = i + 1; j < nums.length; j++) {
//             let innerCurr = nums[j];
//             nextSum += innerCurr;

//             if (maxSum < nextSum) {
//                 maxSum = nextSum;
//                 maxN = j;
//             }
//         }
//         maxSet.push({ "n": maxN, "sum": maxSum });
//         maxSum = -Infinity;
//     }
//     for (const obj of maxSet) {
//         if (obj.sum > maxSum) {
//             maxSum = obj.sum;
//         }

//     }
//     return maxSum;

// }

// O(n^2)

// var maxSubArray = function(nums) {
//     let maxSum = -Infinity;
//     let currSum = 0;
//     let len = nums.length;
//     for (var i = 0; i < len; i++) {
//         currSum = 0;
//         for (var j = i; j < len; j++) {
//             currSum += nums[j];
//             if (maxSum < currSum) {
//                 maxSum = currSum;
//             }
//         }
//     }
//     return maxSum;
// };

// O(n)
// var maxSubArray = function(nums) {
//     let currSum = -Infinity;
//     let maxSum = -Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         currSum = Math.max(0, currSum);
//         currSum += nums[i];
//         maxSum = Math.max(maxSum, currSum);
//     }
//     return maxSum;

// };


// Divide and Conquer

// function helper(list, m, n) {
//     if (m === n) return list[m];
//     let sum = 0;
//     let lmax = -Number.MAX_VALUE;
//     let rmax = -Number.MAX_VALUE;
//     const mid = ((n - m) >> 1) + m;
//     const l = helper(list, m, mid);
//     const r = helper(list, mid + 1, n);
//     for (let i = mid; i >= m; i--) {
//       sum += list[i];
//       if (sum > lmax) lmax = sum;
//     }

//     sum = 0;

//     for (let i = mid + 1; i <= n; i++) {
//       sum += list[i];
//       if (sum > rmax) rmax = sum;
//     }

//     return Math.max(l, r, lmax + rmax);
//   }

//   var maxSubArray=function (list) {
//     return helper(list, 0, list.length - 1);
//   }
maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSubarray([5, 4, -1, 7, 8]);