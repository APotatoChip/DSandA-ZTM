//transpose - swtiching the matrix's row and column indices
var transpose = function(matrix) {

    const result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        const col = []
        for (let j = 0; j < matrix.length; j++) {
            col.push(matrix[j][i]);
        }
        result.push(col)
    }

    return result
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
transpose(matrix);