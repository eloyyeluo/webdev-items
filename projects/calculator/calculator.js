const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

var app = express();

app.use(bodyParser.urlencoded({extended: true})); //extended tells us do we want to show nested objects

var portNum = 3000;
// root route
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); //dirname gets the cwd
});

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
}) 

// post requests for the calculator
app.post("/", function(req, res) {
    // req.body gets us an object 
    //req.body has attributes listed in name
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("the sum is: " + result);
});

// post request for the bmi calculator
app.post("/bmiCalculator", function(req, res) {
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var result = w / Math.pow(h,2);
    res.send("Your BMI is " + result);
});

//listen for requests
app.listen(portNum, function() {
    console.log("Server running at port 3000");
});