var backspaceCompare = function(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    let sSkipCount = 0;
    let tSkipCount = 0;

    while (i >= 0 || j >= 0) {
        if (s[i] === "#") {
            sSkipCount++;
            i--;
        } else if (sSkipCount > 0 && i >= 0) {
            sSkipCount--;
            i--;
        } else if (t[j] === "#") {
            tSkipCount++;
            j--;
        } else if (tSkipCount > 0 && j >= 0) {
            tSkipCount--;
            j--;
        } else if (s[i] !== t[j]) {
            return false;
        } else {
            i--;
            j--;
        }
    }
    return true;
};

let s = "ab##"
let t = "c#d#"
backspaceCompare(s, t);