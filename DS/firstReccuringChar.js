function firstRecurringChar(arr) {
    let pastOccur = new Set();
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        if (pastOccur.has(curr)) {
            return curr;
        }
        pastOccur.add(curr);
    }

    return undefined;
}
firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringChar([2, 3, 4, 5]);