var reverseString = function(s) {

    var i = 0
    var j = s.length - 1

    while (i < j) {
        // swap
        var temp = s[i]
        s[i] = s[j]
        s[j] = temp

        i++
        j--
    }
    return s;
};

s = ["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"];
reverseString(s);