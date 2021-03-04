const express = require("express");
const app = express();

const PORT = process.env.port || 3100;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
