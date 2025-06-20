// Demonstrating Debugging Techniques

function calculateArea(length, width) {
  console.log("Length:", length, "Width:", width); // Debug output
  return length * width;
}

console.warn("This is a warning");
console.error("This is an error");
debugger; // Use this to pause execution in DevTools

console.log("Area is", calculateArea(5, 3));
