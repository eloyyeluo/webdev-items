const express = require("express");
const app = express();
app.get("/", function(req, res) {
    // we can try to use req
    res.send("<h1>Hello There</h1>");
});

app.get("/contact", function(req, res) {
    // this is a route
    // contact can be accesed at localhost:3000/contact
    res.send("Contact me at: yeluo.eloy");
})

app.get("/about", function(req, res) {
    res.send("mein nam ist Eloy Ye Luo, there is no greater person that him");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});