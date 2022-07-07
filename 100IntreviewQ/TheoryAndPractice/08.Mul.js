// Question :
// Write a "mul" function which will properly when invoked as below syntax
// ----------------------------------------------------------------

// Answer:
// Here mul function accepts the first params and returns anonymous fn that
// takes the second param and return another anonymous function that returnsthe multiplication 
// result of the three arguments which are being passed in successive order
function mul(f) {
    return function(s) { // anonymous function
        return function(l) {
            return l * s * f;
        }
    }
}
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

// Function defined inside has access to outer function variables and function is the first
// class object so it can be returned by function as well and passed as argument in another fn

// A function is an instance of Object type
// A function can have properties and has a link to its constructor method
// Function can be stored as variable
// Function can be passed as param to another fn
// Function can be returned from another fn