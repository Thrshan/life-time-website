const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const cal = require(__dirname + "/calculate.js")

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    let birthDay = "1996-12-26";
    let lifeExp = 75;
    data = cal.processData(birthDay, lifeExp);
    res.render('index', {
        totalBlock: data.totalBlock,
        fillBlock: data.fillBlock,
        fromDates: data.fromDates,
        toDates: data.toDates,
        wrap: "",
        mainBlur: " main-blur"
    });
});

app.post('/', function (req, res){
    let birthDay = req.body.birthDay;
    let lifeExp = Number(req.body.totalYears);
    data = cal.processData(birthDay, lifeExp);
    res.render('index', {
        totalBlock: data.totalBlock,
        fillBlock: data.fillBlock,
        fromDates: data.fromDates,
        toDates: data.toDates,
        wrap: " hidden",
        mainBlur: ""
    });
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started");
});