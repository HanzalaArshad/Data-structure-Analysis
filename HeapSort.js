function buildMaxHeap(arr) {
  let heapSize = arr.length;
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(arr, i, heapSize);
  }
}

function heapify(arr, i, heapSize) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if (left < heapSize && arr[left] > arr[largest]) {
      largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
  }
  if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, largest, heapSize);
  }
}

function heapSort(arr) {
  let heapSize = arr.length;
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapSize--;
      heapify(arr, 0, heapSize);
  }
}

const array = [90,5,6,3,2,4,2,3,5];
heapSort(array);
console.log(array);  // Output will be the sorted array
