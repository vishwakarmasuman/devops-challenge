const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Application Running");
});

app.get("/health", (req, res) => {
  res.status(200).send("Healthy");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
