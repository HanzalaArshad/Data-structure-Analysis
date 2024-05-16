function matrixMultiply(a, b) {
  let result = [];
  
  // Check if the matrices are compatible for multiplication
  if (a[0].length !== b.length) {
      console.error("Matrices cannot be multiplied. Invalid dimensions.");
      return;
  }

  // Iterate through rows of matrix a
  for (let i = 0; i < a.length; i++) {
      result[i] = [];
      // Iterate through columns of matrix b
      for (let j = 0; j < b[0].length; j++) {
          let sum = 0;
          // Iterate through columns of matrix a or rows of matrix b
          for (let k = 0; k < a[0].length; k++) {
              sum += a[i][k] * b[k][j];
          }
          result[i][j] = sum;
      }
  }
  return result;
}

// Example matrices
let matrix1 = [[1, 2, 3], [4, 5, 6]];
let matrix2 = [[7, 8], [9, 10], [11, 12]];

// Multiply the matrices
let resultMatrix = matrixMultiply(matrix1, matrix2);

// Display the result


console.log(resultMatrix);
