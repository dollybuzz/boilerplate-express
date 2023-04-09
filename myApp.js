let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';

console.log("Hello World");

app.get("/", function(req, res) {
  //res.send("Hello Express");
  res.sendFile(absolutePath);
});



































module.exports = app;
