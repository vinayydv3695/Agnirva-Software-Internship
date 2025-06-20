// Fixed version of findLargest function

function findLargest(numbers) {
  let largest = numbers[0]; // Fixed initialization
  for (let num of numbers) {
    if (num > largest) {
      largest = num; // Fixed assignment operator
    }
  }
  return largest;
}

let numbers = [3, 5, 2, 8, 1];
console.log("Largest number is", findLargest(numbers)); // Output: 8
