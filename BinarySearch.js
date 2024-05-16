function BinarySearch(A, beg, end, item) {
    let mid;
    if (beg > end) {
        return null;
    } else {
        mid = Math.floor((beg + end) / 2); // Corrected mid calculation

        if (item === A[mid]) {
            return mid;
        } else if (item < A[mid]) {
            return BinarySearch(A, beg, mid - 1, item);
        } else { // Changed to else instead of else if
            return BinarySearch(A, mid + 1, end, item);
        }
    }
}

let A = [1, 2, 3, 4, 5];
let beg = 0;
let end = A.length - 1; // Corrected end value
let item = 3;

console.log(BinarySearch(A, beg, end, item)); // Output: 2 (index of item 3 in array A)
