function maxAndMin(arr, low, high) {
  if (low === high) {
      return [arr[low], arr[low]];
  } else if (low === high - 1) {
      if (arr[low] > arr[high]) {
          return [arr[low], arr[high]];
      } else {
          return [arr[high], arr[low]];
      }
  } else {
      const mid = Math.floor((low + high) / 2);
      const [max, min] = maxAndMin(arr, low, mid);
      const [max1, min1] = maxAndMin(arr, mid + 1, high);
      const newMax = Math.max(max, max1);
      const newMin = Math.min(min, min1);
      return [newMax, newMin];
  }
}

const arr = [3, 1, 4, 6, 2, 8];
const [maxVal, minVal] = maxAndMin(arr, 0, arr.length - 1);
console.log("Max:", maxVal);
console.log("Min:", minVal);
