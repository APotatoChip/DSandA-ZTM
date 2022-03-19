var reverseWords = function(s) {
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i].split("");
        curr.reverse();

        arr[i] = curr.join("");
    }
    return arr.join(" ");
};

let s = "Let's take LeetCode contest";