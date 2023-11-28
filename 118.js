/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }

    // Initialize Pascal's Triangle with the first row
    var triangle = [[1]];

    // Generate subsequent rows
    for (let i = 1; i < numRows; i++) {
        // Initialize the current row with the first element
        var row = [1];

        // Generate the elements in the current row based on the previous row
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        // Add the last element to the current row
        row.push(1);

        // Add the current row to Pascal's Triangle
        triangle.push(row);
    }

    return triangle;
};
