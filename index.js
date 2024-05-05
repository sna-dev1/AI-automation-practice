const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/callback", function (req, res) {
  res.status(200).send("This is a callback url to be used");
});

app.listen(5000, () => {
  console.log(`Listening on port 5000...`);
});
