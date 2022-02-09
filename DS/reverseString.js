function reverseString(input) { // a little bit of wtf; cared too much for spaces which apparently count as strings
    // check input data
    if (!input || typeof(input) !== 'string' || input.length < 2) {
        return 'Bad Input!';
    }
    var strArr = input.split(' '); //O(n)
    var result = []; //O(1)
    for (let el of strArr) { // O(n)
        el = el.split("").reverse().join(""); //O(3n)
        result.push(el); //O(n)
    }
    result = result.reverse().join(" "); //O(2n)
    console.log(result); //O(1)

}
reverseString('Hi my name is Tsuri'); //O(8n+2)==O(n) as we interpret the input string as an array

function reverseString1(input) {
    console.log(input.split("").reverse().join(""));
}
reverseString1("Hi my name is Tsuri")

const reverseString2 = (str) => console.log([...str].reverse().join("")); // fancy JS way
reverseString2("Hi my name is Tsuri")