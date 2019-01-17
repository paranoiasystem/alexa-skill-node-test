var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.port || 8080;
var app = express();

var app_alexa = new alexa.app("test");

app_alexa.express({
    expressApp: app,
    checkCert: false,
    debug: true
});

app_alexa.intent("provaIntent", {
    "slots": null,
    "utterances": [
        "salutami", 
        "ciao"
    ]}, (req, res) => {
    res.say("hohoho, sono su heroku");
});

app.listen(PORT);