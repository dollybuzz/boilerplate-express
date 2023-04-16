let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';
let assetPath = __dirname + '/public';

console.log("Hello World");

app.use("/public", express.static(assetPath));

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/", function(req, res) {
  //res.send("Hello Express");
  res.sendFile(absolutePath);
});

app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else { res.json({ "message": "Hello json" }); }
});

app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({ time : req.time });
});


module.exports = app;