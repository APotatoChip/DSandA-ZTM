// 2 parameters - arrays - no size limit
// return true or false


var commonItems = function(arr1, arr2) {

    // brute force - O(a*b) because the arrays are not the same size
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                console.log("true");
                return true;
            }
        }
    }
    console.log("false");
    return false;
}

var commonItems = function(arr1, arr2) {

        // using set - set.has is O(1)
        let items = new Set();
        for (let item in arr1) {
            items.add(arr1[item]);
        }
        for (let item in arr2) {
            if (items.has(arr2[item])) {
                return true;
            }
        }

        return false;
    }
    //O(a + b) Time Complexity
    //O(a) Space Complexity

//concat the two arrays
//set -> check if has -> true

// js specific solution
function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}


let arr1 = ['a', 'b', 'c', 'x'];
let arr2 = ['z', 'y', 'x'];
containsCommonItem3(arr1, arr2);

// nested loop -> hash tables -> objects