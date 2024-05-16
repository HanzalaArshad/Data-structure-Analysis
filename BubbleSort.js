function bubbleSort(A, N) {
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i - 1; j++) {
            if (A[j] > A[j + 1]) {
                swap(A, j, j + 1); // Pass A, j, and j+1 to swap
            }
        }
    }
}

function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

// Example usage:
let arr = [5, 3, 8, 1, 2];
let size = arr.length;
bubbleSort(arr, size);
console.log("Sorted array:", arr); // Output: Sorted array: [1, 2, 3, 5, 8]
