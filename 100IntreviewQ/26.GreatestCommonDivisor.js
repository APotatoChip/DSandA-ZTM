function greatestCommonDivisor(a, b) {
    if (!b) {
        return a;
    }

    return greatestCommonDivisor(b, a % b);
}

greatestCommonDivisor(72, 9);

console.log(72 % 9);