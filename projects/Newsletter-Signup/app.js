const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

// use methods
app.use(express.static("public")); //path to static files; reference folder
app.use(bodyParser.urlencoded({
    extended: true
}));

const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us20.api.mailchimp.com/3.0/lists/870e0fad51"; //correct: https://us20.api.mailchimp.com/3.0/lists/870e0fad51

    const options = {
        method: "POST",
        auth: "owenMorgan:4f1d3d93d54723544bb3047747cf98c2-us20"
    }

    const request = https.request(url, options, (response) => {

        if (response.statusCode === 200) {
            res.sendFile(`${__dirname}/success.html`);
        } else {
            res.sendFile(`${__dirname}/failure.html`);
        }

        response.on("data", (data) => {
            console.log(JSON.parse(data));
        });
    });


    request.write(jsonData);
    request.end();

});

app.post("/failure", (req, res) => {
    res.redirect("/");
})

app.listen(PORT, function () {
    console.log(`server is running on port ${PORT}`);
});