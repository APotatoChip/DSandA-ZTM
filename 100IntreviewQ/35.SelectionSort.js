const selectionSort = function(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        // set current index as minimum
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                //update minimum if current is lower than what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

console.log(selectionSort([7, 18, 5, 2, 34, 55, 1, 6]));