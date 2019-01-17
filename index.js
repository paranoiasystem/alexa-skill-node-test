var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.port || 8080;
var app = express();

var app_alexa = new alexa.app("ProvaSkill");

app_alexa.express({
    expressApp: app,
    checkCert: false,
    debug: true
});

app.set("view engine", "ejs");

alexaApp.launch(function(request, response) {
  response.say("hai lanciato la prova");
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
console.log("Listening on port " + PORT + ", try http://localhost:" + PORT + "/test");