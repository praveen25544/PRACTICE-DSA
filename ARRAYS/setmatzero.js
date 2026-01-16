// var setZeroes = function(matrix) {
//     let n = matrix.length, m = matrix[0].length;
//     let row0 = false, col0 = false;

//     for (let j = 0; j < m; j++)
//         if (matrix[0][j] === 0) row0 = true;

//     for (let i = 0; i < n; i++)
//         if (matrix[i][0] === 0) col0 = true;

//     for (let i = 1; i < n; i++)
//         for (let j = 1; j < m; j++)
//             if (matrix[i][j] === 0)
//                 matrix[i][0] = matrix[0][j] = 0;

//     for (let i = 1; i < n; i++)
//         for (let j = 1; j < m; j++)
//             if (matrix[i][0] === 0 || matrix[0][j] === 0)
//                 matrix[i][j] = 0;

//     if (row0) for (let j = 0; j < m; j++) matrix[0][j] = 0;
//     if (col0) for (let i = 0; i < n; i++) matrix[i][0] = 0;
// };
// let matrix = [[1,1,1],[1,0,1],[1,1,1]];
// setZeroes(matrix);
// console.log(matrix);

var setZeroes = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // 1️⃣ Check first row
    for (let j = 0; j < m; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }
    // 2️⃣ Check first column
    for (let i = 0; i < n; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }
    // 3️⃣ Use first row & column as markers
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;   // mark row
                matrix[0][j] = 0;   // mark column
            }
        }
    }
    // 4️⃣ Set zeroes using markers
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // 5️⃣ Zero first row if needed
    if (firstRowZero) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    // 6️⃣ Zero first column if needed
    if (firstColZero) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }
};
let matrix = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix);
console.log(matrix);