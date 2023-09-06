const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.post("/api/v1/login", (req, res) => {
 res.send("done");
 console.log("name");
  });



app.listen(port, () => {
  console.log(`Server is Woring on port: ${port}`);
});
