function twoSum(input, trg) {
    let hashtable = {};
    for (let i = 0; i < input.length++; i++) {
        let complement = trg - input[i];
        if (hashtable.hasOwnProperty(complement)) {
            console.log([hashtable[complement], i]);
            return [hashtable[complement], i];
        }
        hashtable[input[i]] = i;
    }
}

let target = 9;
let nums = [2, 7, 11, 15];
twoSum(nums, target)