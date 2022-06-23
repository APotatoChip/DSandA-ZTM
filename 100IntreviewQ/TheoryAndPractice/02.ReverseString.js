// Question :
// Given a string, reverse each word in the sentence
// For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
// ----------------------------------------------------------------


// Answer: 
// Solution using JavaScript methods
function reverseString(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Array.from(arr[i]).reverse();
        arr[i] = arr[i].join("");
    }
    arr = arr.join(" ");
    return arr;

}

console.log(reverseString("Welcome to this Javascript Guide!"));