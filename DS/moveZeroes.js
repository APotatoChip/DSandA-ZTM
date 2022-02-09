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

// we want to have two partitions. The first partition has only non-zeros and the second partition has only zeroes.
// If we push all non-zeroes to the first partition, zeroes will be automatically moved to the second partition.
// So, we keep an index where the next non-zero will go into and this index starts from zero. Every time we encounter a non-zero, 
// we swap this element with the number at the index for the next non-zero.

// var moveZeroes = function(nums) {
//     let curr = false;
//     let ln = nums.length;
//     for (let i = 0; i < ln; i++) {
//         if (curr == true) {
//             i--;
//             ln--;
//         }
//         if (nums[i] == 0) {
//             nums.splice(i, 1);
//             nums.push(0);
//             curr = true;
//         } else {
//             curr = false;
//         }

//     }
//     return nums;
// }

// var moveZeroes = function(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) {
//             nums[i] = "!";
//             count++;
//         }
//     }
//     let str = nums.join("");
//     let regex = /!/ig;
//     str = str.replace(regex, "").split("").map(el => el = Number(el));
//     for (let j = 0; j < count; j++) {
//         str.push(0)
//     }
//     nums = str;
//     console.log(nums);


// };

moveZeroes([0, 0, 1]);
moveZeroes([0, 1, 0, 3, 12]);

// var moveZeroes = function(nums) {
//     let arr = nums.filter(n => n !== 0);
//     let zeroes = nums.filter(n => n == 0);
//     let final = arr.concat(zeroes);
//     console.log(final);

// };