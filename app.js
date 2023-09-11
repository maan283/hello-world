const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

const revision = process.env.GIT_REVISION || "No revision";

app.get("/", (req, res) => {
  res.send(`Hello, World how are you! This is another new change. Latest Commit: ${revision}`);
});

app.listen(port, () => {
  console.log(`Server is running on port :${port}`);
});
