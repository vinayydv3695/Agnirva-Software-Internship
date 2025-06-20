// Bubble Sort Implementation (O(n^2))

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

let list = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(list);
console.log("Sorted Array:", list);
