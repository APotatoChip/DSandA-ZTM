var reverseString = function(s) {
    // In place with O(1) extra memory
    // Two Pointers approach
    // Place one pointer at each end; increment left one; decrement right one; while left is less than right
    // Swap items on each iteration
    var leftPointer = 0
    var rightPointer = s.length - 1

    while (i < j) {
        // swap
        var temp = s[leftPointer]
        s[leftPointer] = s[rightPointer]
        s[rightPointer] = temp

        leftPointer++;
        rightPointer--;
    }
    return s;
};

s = ["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"];
reverseString(s);