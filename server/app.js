const express = require("express");
const app = express();
app.use(express.json()); //prints body request
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "sdaikdhjiIHDiu8987J(@?!dDSF8645DAsadA[]ds54aASD()21asd1SFP";

const mongooseURL = "mongodb+srv://client:client123@cluster0.lfrgaha.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongooseURL, {
    useNewUrlParser: true})
    .then(()=>{console.log("Connected to database successfully");})
    .catch(e=> console.log(e)); 

app.listen(5000, () => {
    console.log("Server started successfully.");
});

require("./userDetails");
const User = mongoose.model("UserInfo"); //encodes model

app.post("/register", async(req, res)=>{
    const {fname, lname, email, password} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await User.findOne({email});
        if (oldUser) {
            return res.json({error: "User already exists!"});
        }
        await User.create({
            fname, 
            lname, 
            email, 
            password: encryptedPassword,
        });
        res.send({status:"ok"});
    } catch (error) {
        res.send({status:"error"});
    }
});

app.post("/login-user", async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
        return res.json({error: "User not found!"});
    }
    if (await bcrypt.compare(password, user.password)){
        const token = jwt.sign({}, JWT_SECRET);

        if(res.status(201)){
            return res.json({status: "ok", data: token});
        } else {
            return res.json({status: "error"});
        }
    }
    res.json({status: "error", error: "invalid password"});

});