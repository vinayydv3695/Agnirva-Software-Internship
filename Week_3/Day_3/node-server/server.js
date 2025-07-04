// server.js
const express = require("express");
const app = express();

// root route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// dynamic greeting
app.get("/greet/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}! Welcome to our server.`);
});

// JSON API
app.get("/api/data", (_req, res) => {
  res.json({ message: "Hello, World!", status: "success" });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
