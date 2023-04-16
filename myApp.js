let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html';
let assetPath = __dirname + '/public';
let bodyParser = require('body-parser');

console.log("Hello World");

//mounted middleware functions
app.use("/public", express.static(assetPath));

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//routes
app.get("/", function(req, res) {
  //res.send("Hello Express");
  res.sendFile(absolutePath);
});

app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else { res.json({ "message": "Hello json" }); }
});

app.get("/now", function(req, res) {
  req.time = new Date().toString();
}, (req, res) => {
  res.json({ time : req.time });
});

app.get("/:word/echo", function(req,res) {
  var value = req.params.word;
  res.send({echo: value});
});

app.route("/name")
  .get(function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    res.json({name: `${firstName} ${lastName}`});
  })
  .post(function(req, res) { });

module.exports = app;