function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `Target found at index ${i}`;
    }
  }
  return "Target not found";
}
