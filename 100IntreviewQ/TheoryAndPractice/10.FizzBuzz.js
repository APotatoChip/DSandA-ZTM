// Question :
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, 
//"buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
// ----------------------------------------------------------------

// Answer:

for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0,
        b = i % 5 == 0;
    console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}
//if f is true (b ? 'FizzBuzz' : 'Fizz') else b if b is true 'Buzz' else i