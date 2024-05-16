function SelectionSort(a, n) {
    let min, temp;
    for (let i = 0; i < n - 1; i++) {
        min = i;

        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }

        temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }
}

let a = [8, 1, 2, 5, 6, 7, 8];
let n = a.length;

let result =SelectionSort(a, n);
console.log("Sorted array: ",result); // Output: Sorted array: [1, 2, 5, 6, 7, 8, 8]
