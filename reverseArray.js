function reverseArray(a) {
    let [n, arr] = [...arguments];

    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            let curr = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = curr;
        }

    }
    return arr;

}

reverseArray(4, [1, 4, 3, 2]);