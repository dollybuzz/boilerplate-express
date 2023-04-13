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
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else { res.json({ "message": "Hello json" }); }

});

module.exports = app;