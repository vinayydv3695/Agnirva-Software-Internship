// Performance Comparison: Bubble Sort vs JS Built-in Sort

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

let numbers = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000),
);

let bubbleList = [...numbers];
let start = performance.now();
bubbleSort(bubbleList);
let end = performance.now();
console.log("Bubble Sort Time (ms):", (end - start).toFixed(2));

let builtInList = [...numbers];
start = performance.now();
builtInList.sort((a, b) => a - b);
end = performance.now();
console.log("Built-In Sort Time (ms):", (end - start).toFixed(2));
