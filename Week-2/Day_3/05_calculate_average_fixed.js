// Fixed version of average calculator

function calculateAverage(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  let average = total / numbers.length;
  return average; // Fixed typo from 'averge'
}

let nums = [10, 20, 30, 40];
console.log("Average is", calculateAverage(nums)); // Output: 25
