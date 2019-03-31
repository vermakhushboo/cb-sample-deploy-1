const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  console.log(res.send("Hello! This is a sample app"));
});

app.listen(port);
