const express = require("express")
var app = express()

app.post("/", function(req, res) {
    console.log("req.params: " , req.params)
    res.end()
})

var server = app.listen(3344, "192.168.56.101", function() {
    console.log("listen on 3344")
})
