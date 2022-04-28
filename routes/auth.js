const routes = require("express").Router();
const mongoose = rwuire("mongoose");
const bcrypt = require("bcryptjs");
const model = require("mongoose");
const { router } = require("../app");
const User = require("../models/User.model");
const saltRounds = 10;

router.get("/signup", (req, res) => {
    res.render("auth/signup")
});

router.post("/signup", (req,res) =>{
const {password,username} = req.body
if(!password || !username) {
    res.render("auth/signup", {
        errorMessage:
        "Please provide a correct username and password.",
    });
    return
}
bcrypt.hash(password, saltRounds).then((hash) => {
    User.create({
        username,
        password: hash,
    })
    .then((userDB) => {
        res.redirect("/login")
    })
    .catch((err) => console.log(err))
})
})