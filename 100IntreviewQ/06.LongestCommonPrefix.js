var longestCommonPrefix = function(strs) {

    function findShortestWord(strs) {
        let min = Infinity;
        let word = "";
        for (let i = 0; i < strs.length; i++) {
            if (min > strs[i].length) {
                min = strs[i].length
                word = strs[i];
            } else {
                min;
            }


        }
        return word;
    }

    let shortestWord = findShortestWord(strs);
    let prefix = "";
    let count = 0;
    while (shortestWord.length != 0) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].substring(0, shortestWord.length) == shortestWord) {
                count++;
            }
            strs[i] = strs[i].substring(0, strs[i].length - 1);
        }
        if (count == strs.length) {
            prefix = shortestWord;
            return prefix;

        } else {
            prefix = "";
        }
        count = 0;
        shortestWord = shortestWord.substring(0, shortestWord.length - 1)
            //console.log(shortestWord);
    }
    return prefix;

};
let strs = ["flower", "flow", "flight"]
longestCommonPrefix(strs)