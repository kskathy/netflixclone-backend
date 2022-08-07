const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project');

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get("/", (req, res) => {
  res.send("This Kathy and Junho's Node Project");
});

require("./profile/service")(app);
require("./chat/service")(app);

app.listen(process.env.PORT || 4000, function () {
  console.log("Listening on Port 4000");
});