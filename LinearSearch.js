function linearSearch(a, n, item) {
  let loc = -1;
  let i = 0;

  while (i < n && a[i] !== item) {
      i = i + 1;
  }

  if (i < n) {
      loc = i;
  }

  return loc;
}

// Example usage
const array = [1, 3, 5, 7, 9];
const target = 5;
const index = linearSearch(array, array.length, target);
console.log(index); // Output: 2 (index of 5 in the array)
