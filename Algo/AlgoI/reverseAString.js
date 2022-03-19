var reverseString = function(s) {
    let l = 0;
    let r = s.length - 1;
    while (l <= r) {
        let temp = s[r];
        s[r] = s[l];
        s[l] = temp;
        l++;
        r--;
    }
};
let s = ["h", "e", "l", "l", "o"];
reverseString(s);