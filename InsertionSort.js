function InsertionSort(a, n) {
    for (let i = 1; i < n; i++) {
        let value = a[i];
        let j = i;

        while (j > 0 && a[j - 1] > value) {
            a[j] = a[j - 1];
            j--; // Decrement j to move leftwards in the array
        }
        a[j] = value; // Insert the value at the correct position
    }
    return a; // Return the sorted array
}

let a = [7, 1, 3, 4, 3, 7, 4];
let n = a.length;

let res = InsertionSort(a, n);
console.log("Sorted array:", res); // Output: Sorted array: [1, 3, 3, 4, 4, 7, 7]
