const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// Time Complexity - O(n^2), Space Complexity O(1)
// Elementary Sorting
// Iteration by couples like a popping bubble for the length of the set
function bubbleSort(array) {
    let length = array.length;
    for (let j = 0; j < length; j++) {
        for (let i = 0; i < length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
}
bubbleSort(numbers);
console.log(numbers);