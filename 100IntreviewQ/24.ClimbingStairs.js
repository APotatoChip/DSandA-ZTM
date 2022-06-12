// input: n steps to reach the top 
// each time can climb either 1 or 2 steps
// output: number of distinc ways to climb to the top

// Draw a diagram for n = 4

//  4
//  -1    -2
//   3            2
// -1  2         -1 2
// 2        1       1  0
// -1 -2 -1 -2   -1 -2 
// 1  0   0  -1   0   -1
// -1 -2 
// 0 
// Recursive Tree Problem

var climbStairs = function(n) {
    return helper(n);

};


function helper(n) {
    if (n == 0) {
        // base case where we arrived at an answer
        return 1;
    } else if (n < 0) {
        // base case where we went too far
        return 0;
    } else {
        // recursive case where we try taking 1 step
        // and 2 steps, adding the unique permuation
        // of steps back
        return helper(n - 1) + helper(n - 2);
    }
}

let memo = [];
var climbStairs = function(n) {

    // instantiate the datastructure to cache the calculation
    // to each of our subproblems. i.e. what step we are on

    return helper(n);
}


function helper(n) {
    if (n < 0) {
        return 0;
    } else if (memo[n] != 0) {
        // If we stored something in our cache reuse it and avoid
        // recalculating everything
        return memo[n];
    } else if (n == 0) {
        return 1;
    } else {
        // store our calculation inside our cache so we don't
        // have to recalculate it again for memo[n]
        memo[n] = helper(n - 1) + helper(n - 2);
        return memo[n];
    }
}
climbStairs(3);