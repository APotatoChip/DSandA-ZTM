var canPlaceFlowers = function(flowerbed, n) {
    let previous;
    let next;
    let current;

    for (let i = 0; i < flowerbed.length; i++) {
        previous = flowerbed[i - 1];
        current = flowerbed[i];
        next = flowerbed[i + 1];
        // here we take advantage of previous and next being falsy values when they are outside of the array or when they are equal to zero
        if (!previous && !current && !next) {
            flowerbed[i] = 1;
            n--;
            //early return optimization
            if (n === 0) return true;
        }
    }

    return n <= 0
};
let flowerbed = [1, 0, 0, 0, 1];
let n = 2;
canPlaceFlowers(flowerbed, n);