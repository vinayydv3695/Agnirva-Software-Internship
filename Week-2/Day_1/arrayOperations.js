let colors = ["red", "blue"];
colors.push("green");
colors.unshift("yellow");
colors.pop();
colors.shift();
console.log(colors.includes("red"));
console.log(colors.indexOf("blue"));
colors.forEach(function (color) {
  console.log(color);
});
