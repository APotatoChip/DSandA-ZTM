// Dynamic Programming (just a buzz word) - technique for optimization using caching
// Memoization ~~~ Caching
// remember a solution to a problem, so you can use it later on if the same problem appears
// Good for operations that takes long time

https: //www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
    // Normal solution
    function addTo80(n) {
        console.log("long operation");
        return n + 80;
    }

addTo80(5);
addTo80(5);
addTo80(5);

// Solution using dynamic programming approach
let cache = {};

function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log("long operation")
        cache[n] = 80 + n;
        return cache[n];
    }
}

memoizedAddTo80(5);
memoizedAddTo80(5);
memoizedAddTo80(6);
memoizedAddTo80(6);

// Avoid poluting the global scope -> use closure (js specific)

function nonPolutingMemoizedAddTo80(n) {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("long operation");
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoization = nonPolutingMemoizedAddTo80();
memoization(5);
memoization(5);
memoization(6);
memoization(6);

function splicePlay(arr) {
    console.log(months);
    // deletes the item from the original array and returns array with the deleted item
    let month = months.splice(2, 1)[0];
    console.log(months);
    console.log(month);
    // replaces 1 element at index 0 with month
    console.log(months.splice(0, 1, month));
    console.log(months);
    // removes two elements
    console.log(months.splice(0, 2));


}

const months = ['Jan', 'March', 'April', 'June'];
splicePlay(months);