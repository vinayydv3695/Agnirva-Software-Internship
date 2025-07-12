// emailValidator.test.js
const isEmailValid = require("./emailValidator");

test("valid email passes", () => {
  expect(isEmailValid("user@example.com")).toBe(true);
});

test("invalid email fails", () => {
  expect(isEmailValid("userexample.com")).toBe(false);
});
