const express = require("express")
var router = express.Router()
//var formidable = require("formidable")
var bodyParser = require("body-parser")
var path = require("path")

var VoterModel = require("./models/voters")

var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "static")))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

var VoterModel = require("./models/voters")

app.post("/vote", function(req, res, next) {


    //console.log("name:", req.body.name)
    var phone = req.body.phone
    var name = req.body.name
    var age = req.body.age
    var gender = req.body.gender
    var choice = req.body.choice

    var voter = {
        phone: phone,
        name: name,
        age: age,
        gender: gender,
        choice: choice
    }
    console.log(voter)
    VoterModel.create(voter)
     .then(function(result) {
         console.log("creat voter ok")
         //res.redirect("/result")
     })
     .catch(function(e) {
         console.log("register voter fail")
         console.log("err msg:", e);
         //next(e)
     })
    //res.send("thank you for voting")
    //res.setHeader("Content-Type", "text/html")
    //es.sendfile("./static/result.html")
    res.redirect("/result")
})


app.get("/result", function(req, res, next) {
    //console.log("result page")
    //res.send("result page")
    VoterModel.getVoters()
     .then(function(voters) {
        res.render("voters", {
            voters: voters
        })
     })
     .catch(next)
})
var server = app.listen(3344, "192.168.56.101", function() {
    console.log("listen on 3344")
})
