const mongoose = require("mongoose");
const schema = mongoose.Schema(
    {
            _id: String,
            email: String,
            name: String,
            role: Number,
            birthdate: { type: Date, default: null },
            phone: { type: String, default: null },
            city: { type: String, default: null },
            state: { type: String, default: null },
            country: { type: String, default: null },
            school: { type: String, default: null },
            company: { type: String, default: null },
            description: { type: String, default: "I am a new" },
            date: { type: Date, default: Date.now() },
            followers: { type: Array, default: [] },
            followings: { type: Array, default: [] },
            movieList: { type: Array, default: [] },
            chats: { type: Array, default: [] },
    },
    { collection: "profile", versionKey: false }
);
module.exports = schema;