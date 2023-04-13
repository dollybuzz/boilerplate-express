let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';
let assetPath = __dirname + '/public';

console.log("Hello World");

app.use("/public", express.static(assetPath));

app.get("/", function(req, res) {
  //res.send("Hello Express");
  res.sendFile(absolutePath);
});

app.get("/json", function(req, res) {
  res.json({ "message": "Hello json" });
});




































module.exports = app;
