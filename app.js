const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}");
});

app.listen(3000, () => {
  console.log("App running on port 3000...");
});
