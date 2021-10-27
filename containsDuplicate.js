var containsDuplicate = function(nums) {

    var alreadyOccured = new Set();
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        if (alreadyOccured.has(curr)) {
            return true;
        }
        alreadyOccured.add(curr);
    }
    return false;

};
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); //true
containsDuplicate([1, 2, 3, 4]); //false
containsDuplicate([1, 2, 3, 1]); //true