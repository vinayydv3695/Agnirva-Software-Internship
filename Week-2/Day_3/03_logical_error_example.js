// Logical Error Example

function calculateArea(length, width) {
  return length + width; // Should be multiplication
}

console.log("Area is", calculateArea(5, 3)); // Output: 8 (wrong)
