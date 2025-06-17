let numbers = [10, 25, 7, 50, 32];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
document.getElementById("output").innerText =
  "The largest number is: " + largest;
