const nToTheNPower = function(n, m) {
    if (m === 1) {
        return n;
    }
    if (m === 0) {
        return 1;
    }
    return n * nToTheNPower(n, m - 1);
}
nToTheNPower(2, 3)
    // 2^3 == 2^2 * 2 == 2^1 * 2 * 2 == 2 * 2 * 2