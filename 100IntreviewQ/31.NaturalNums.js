const sumOfNaturalNums = function(n) {
    if (n === 1) {
        return n;
    }
    return n + sumOfNaturalNums(n - 1);
}

sumOfNaturalNums(5);
// 1 + 2 + 3 + 4 + 5 = 15
// use the prev sum and add it to the new num