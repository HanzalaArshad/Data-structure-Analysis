function MergeSort(a) {
    let n = a.length;
    if (n < 2)
        return;

    let mid = Math.floor(n / 2);
    let L = [];
    let r = [];

    for (let i = 0; i < mid; i++) {
        L[i] = a[i];
    }

    for (let i = mid; i < n; i++) {
        r[i - mid] = a[i];
    }

    MergeSort(L);
    MergeSort(r);

    Merge(L, r, a);
}

function Merge(l, r, a) {
    let nl = l.length;
    let nr = r.length;
    let i = 0, j = 0, k = 0;

    while (i < nl && j < nr) {
        if (l[i] < r[j]) {
            a[k++] = l[i++];
        } else {
            a[k++] = r[j++];
        }
    }
    while (i < nl) {
        a[k++] = l[i++];
    }
    while (j < nr) {
        a[k++] = r[j++];
    }
}

let a = [3, 2, 1, 5, 6, 8, 7, 9];
MergeSort(a);
console.log("Sorted array:", a); // Output: Sorted array: [1, 2, 3, 5, 6, 7, 8, 9]
