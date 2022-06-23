// Question :
// How would you check if a number is an integer?
// ----------------------------------------------------------------

// Answer:
function isInt(n) {
    if (n % 1 === 0) {
        console.log(`${n} is Integer`);
    } else {
        console.log(`${n} is Decimal`);
    }
}