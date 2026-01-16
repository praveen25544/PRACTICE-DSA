
    // // 1. Transpose the matrix (swap rows and columns)
    // for i from 0 to n-1:
    //     for j from i to n-1:
    //         swap matrix[i][j] with matrix[j][i]

    // // 2. Reverse every row
    // for each row i from 0 to n-1:
    //     reverse row i

    let rotate = function(matrix) {
    let n =matrix.length;
    //transpose the matrix with nested loops i,j.
    for (let i =0 ;i<n;i++){
        for (let j =i; j<n; j++){
            let temp =matrix[i][j];
            matrix[i][j] =matrix [j][i];
            matrix[j][i]=temp;
        }
    }
    //reverse each row
    for(i=0; i<n;i++){
        matrix[i].reverse();
    }
};
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);
console.log(matrix);



