const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`express на http://localhost:${port}`);
  console.log(`docker на http://localhost:3001`);
});
