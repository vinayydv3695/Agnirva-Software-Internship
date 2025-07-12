// factorial.js
function factorial(n) {
  if (n < 0) throw new Error("Negative input not allowed");
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

module.exports = factorial;
