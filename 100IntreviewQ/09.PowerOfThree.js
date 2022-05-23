var isPowerOfThree = function(n) {

    if (n == 0) {
        return false;
    } else {
        if (n % 3 == 0 && n != 0) {
            return isPowerOfThree(n / 3);
        } else if (n == 1) {
            return true;
        } else {
            return false;
        }
    }



};
isPowerOfThree(45);