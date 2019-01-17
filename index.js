var express = require("express");
var alexa = require("alexa-app");
var bodyParser = require("body-parser");

var PORT = process.env.port || 8080;

var app = express();
app.use(bodyParser.json());

var app_alexa = new alexa.app("ProvaSkill");

app_alexa.express({
    expressApp: app,
    checkCert: false,
    debug: true
});

app_alexa.launch(function(request, response) {
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
console.log("Listening on port " + PORT);