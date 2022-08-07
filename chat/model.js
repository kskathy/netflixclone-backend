const mongoose = require("mongoose");
const schema = require("./schema");
const model = mongoose.model("ChatModel", schema);
module.exports = model;