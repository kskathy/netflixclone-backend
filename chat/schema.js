const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
      _id: String,
      sender: String,
      receiver: String,
      conversation: { type: Array, default: [] },
    },
    { collection: "chat", versionKey: false }
);
module.exports = schema;