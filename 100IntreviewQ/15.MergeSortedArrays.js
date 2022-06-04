// Two pointers solution
// As the values are sorted
// start by comparing the largest numbers between the two arrays and add to the end of nums1
// while there are numbers in nums2 arr - n

var merge = function(nums1, m, nums2, n) {
    while (n) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m - 1];
            m--;

        } else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;

        }
    }
    console.log(nums1);
    return nums1;
};

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;
merge(nums1, m, nums2, n);