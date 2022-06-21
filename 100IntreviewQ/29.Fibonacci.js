// const fib = function(n) {
//     if (n === 1) {
//         return [0, 1];
//     } else {
//         var s = fib(n - 1);
//         s.push(s[s.length - 1] + s[s.length - 2]);
//         return s;
//     }
// }

// fib(5);

const fib2 = function(n) {
    if (n < 2) {
        return n;
    }
    return fib2(n - 1) + fib2(n - 2);
}

fib2(6)