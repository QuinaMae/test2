const mongoose = require("mongoose");
const UserDetailsScehma = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        suffix: String,
        email: {type: String, unique: true },
        password: String,
        gender: String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailsScehma);