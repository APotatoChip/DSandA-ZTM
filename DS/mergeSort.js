function mergeSort(arr1, arr2) {
    let arr = [];

    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        count = 0;
        if (arr2.length == 0 && i < arr1.length) {
            arr.push(el1);
        } else {
            for (let j = 0; j <= arr2.length; j++) {
                j = j - count;
                let el2 = arr2[j];
                if (el1 < el2) {
                    arr.push(el1);
                    break;
                }
                arr.push(el2);
                arr2.splice(j, 1);
                count = 1;
                if (arr2.length == 0) {
                    arr.push(el1);
                }
            }
        }
    }
    console.log(arr);
    return arr;
}
mergeSort([0, 3, 4, 31], [-1, 4, 6, 30]);

// function mergeSort(arr1,arr2){
//     let test = arr1.concat(arr2).sort((a, b) => a - b);

//         console.log(test);
//     }
//     mergeSort([0, 3, 4, 31], [-1, 4, 6, 30]);