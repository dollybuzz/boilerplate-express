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




































module.exports = app;
