// //pseudocode for spiral matrix
// function spiralOrder(matrix):
//     result = empty list

//     top = 0
//     bottom = number of rows - 1
//     left = 0
//     right = number of columns - 1

//     while top <= bottom AND left <= right:

//         // Left → Right
//         for col from left to right:
//             add matrix[top][col] to result
//         top = top + 1

//         // Top → Bottom
//         for row from top to bottom:
//             add matrix[row][right] to result
//         right = right - 1

//         // Right → Left
//         if top <= bottom:
//             for col from right to left:
//                 add matrix[bottom][col] to result
//             bottom = bottom - 1

//         //  Bottom → Top
//         if left <= right:
//             for row from bottom to top:
//                 add matrix[row][left] to result
//             left = left + 1

//     return result


var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];

    let noofrows = matrix.length;
    let noofcol = matrix[0].length;

    let sr = 0;               // start row
    let er = noofrows - 1;    // end row
    let sc = 0;               // start column
    let ec = noofcol - 1;     // end column

    let result = [];

    while (sr <= er && sc <= ec) {

        //  Left → Right (top row)
        for (let col = sc; col <= ec; col++) {
            result.push(matrix[sr][col]);
        }
        sr++;

        // Top → Bottom (right column)
        for (let row = sr; row <= er; row++) {
            result.push(matrix[row][ec]);
        }
        ec--;

        // Right → Left (bottom row)
        if (sr <= er) {
            for (let col = ec; col >= sc; col--) {
                result.push(matrix[er][col]);
            }
            er--;
        }

        // Bottom → Top (left column)
        if (sc <= ec) {
            for (let row = er; row >= sr; row--) {
                result.push(matrix[row][sc]);
            }
            sc++;
        }
    }

    return result;
};
