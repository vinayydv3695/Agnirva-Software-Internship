function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return `Target found at index ${mid}`;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return "Target not found";
}
