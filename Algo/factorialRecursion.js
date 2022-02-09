function findFactorialRecursive(number) {
    if (number == 1) {
        return number;
    }
    return number * findFactorialRecursive(number - 1);;


}

findFactorialRecursive(5);

function findFactorialIterative(number) {
    let answer = 1;
    for (let i = number; i > 0; i--) {
        answer *= i;
    }
    return answer;
}

findFactorialIterative(5);