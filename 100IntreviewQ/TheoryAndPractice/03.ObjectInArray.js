// Question :
// How to check if an object is an array or not? Provide some code.
// ----------------------------------------------------------------

// Answer:
// A function that accepts and/or returns another function is called high order function
// In the following example im using the JS high order function - forEach() on the array
// that checks, using typeof, every element of the array whether it is object or not.
let array = [2, 4, "Sarah", undefined, "John", {}, { 1: "Nick" }];
array.forEach((element) => {
    if (typeof element === "object") {
        return element;
    }
})

// All JavaScript objects inherit from a prototype. 
// The JavaScript prototype property allows us to add new properties 
// and/or methods to object constructor, 
// because we can not add new ones to an existing object constructor
// In JavaScript all functions are methods.
// With the call() method we can write a method that can be used on different objects.
// This keyword typically refers to an object. 
// Which object depends on how this is being invoked, used or called.
// - In an object method, this refers to the object.
// - Alone, this refers to the global object.
// - In a function this refers to the global object.
// - In a function in strict mode, this is undefined.
// - In an event this refers to the element that received the event.
// - Methods like call(), apply(), bind() are called function prototype methods
//   and  can refer this to any object.
// - Unlike call() and apply() that execute the current function immediately, bind() returns a new function.

if (Object.prototype.toString.call(array) === '[object Array]') {
    console.log('Array!');
}
console.log(Object.prototype.toString.call(NaN))