var countBits = function(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        let onesCount = convertDecimalToBinary(i);
        arr.push(onesCount);
    }
    return arr;
};


// Helper Functions, so we are not using the built in method
function convertDecimalToBinary(n) {
    //let binArr = [];
    let count = 0;

    while (n != 0) {
        if (n % 2 == 0) {
            //binArr.unshift(0);
            n = n / 2;
        } else {
            ++count;
            //binArr.unshift(1);
            n = Math.floor(n / 2);


        }
    }
    console.log(count);
    return count;
    //return binArr;

};