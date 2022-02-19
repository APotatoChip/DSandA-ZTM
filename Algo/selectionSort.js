const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// O(n^2)
// Elementary Sorting
// Searching for the next min
function selectionSort(array) {
    let length = array.length;
    let minIdx = 0;
    for (let i = 0; i < length; i++) {
        minIdx = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIdx]) {
                let temp = array[j];
                array[j] = array[minIdx];
                array[minIdx] = temp;

            }
        }
    }
}
selectionSort(numbers);
console.log(numbers);