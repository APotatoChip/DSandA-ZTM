var generate = function(numRows) {
    if (!numRows) return [];
    let matrix = [
        [1]
    ];
    for (let i = 1; i < numRows; i++) {
        let row = [1],
            j = 1;
        while (j < i) {
            row.push(matrix[i - 1][j - 1] + matrix[i - 1][j]);
            j++;
        }
        row.push(1);
        matrix.push(row);
    }
    return matrix;
};


generate(5);