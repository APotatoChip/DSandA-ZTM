// Question :
// How to empty an array in JavaScript?
// ----------------------------------------------------------------

// Answer:
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

// Method 1:
// Should be used only if we know the original reference of the array obejct,
// otherwise if the array is a copy of another arrray the main one will remain unchanged.
arrayList = [];

// Method 2:
// This way of emptying th array also updates all the reference variable with cpointing to the original array.
arrayList.length = 0;


// Method 3:
// This method also empties all references.
arrayList.splice(0, arrayList.length);

// Method 4:
while (arrayList.length) {
    arrayList.pop();
}