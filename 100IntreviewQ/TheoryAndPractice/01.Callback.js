// Question :
// Explain what a callback function is and provide a simple example
// ----------------------------------------------------------------


// Answer:
// A callback function is a function that is passed as an argument to another function 
// and executed after some operation has been completed. 
// Below is an example of a callback function that is
// executed after the operation of sorting an array in ascending order.


function modifyArray(arr, cb) {
    let sortedArr = arr.sort((a, b) => a - b);
    cb(sortedArr);
}

let arr = [2, 7, 6, 44, 5, 8];

function writeOnScreen(arr) {
    console.log("The array was sorted in ascending order: " + arr);
}

modifyArray(arr, writeOnScreen);