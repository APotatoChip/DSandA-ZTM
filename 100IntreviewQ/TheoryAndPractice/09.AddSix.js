// Question :
// Write a function that would allow you to do this?
// ----------------------------------------------------------------

// Answer:
// Variables names and functions names share the same namespace so they override each other.
// JS engine ignores the var name if theres a function with the same name;


function createBase(six) {
    return function(n) {
        return n + six;
    };
}
var addSix = createBase(6);
console.log(addSix(10)); // returns 16
addSix(21); // returns 27