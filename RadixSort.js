function radixSort(arr) {
  let maxNum = Math.max(...arr);
  let position = 1;
  while (Math.floor(maxNum / position) > 0) {
      arr = countingSort(arr, position);
      position *= 10;
  }
  return arr;
}

function countingSort(arr, position) {
  let size = arr.length;
  let count = new Array(10).fill(0);
  let sortedArr = new Array(size).fill(0);

  // Count occurrences of each digit
  for (let i = 0; i < size; i++) {
      let digit = Math.floor(arr[i] / position) % 10;
      count[digit]++;
  }

  // Update count array to position of digit in sorted order
  for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
  }

  // Build the sorted array
  for (let i = size - 1; i >= 0; i--) {
      let digit = Math.floor(arr[i] / position) % 10;
      count[digit]--;
      sortedArr[count[digit]] = arr[i];
  }

  return sortedArr;
}

const inputArray = [1000,456,678,345,234,45];
console.log(radixSort(inputArray));  // Output will be the sorted array
