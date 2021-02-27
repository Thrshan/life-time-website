const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser");

const app = express();

let fromDates = [];
let toDates = [];

let age = 25;
let birthDay = "1996-02-09";
let lifeExp = 75;

let totalBlock = 0;
let fillBlock = 0;

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    birthDay = "1996-02-09";
    lifeExp = 75;
    getData();
    res.render('index', {
        totalBlock: totalBlock,
        fillBlock: fillBlock,
        fromDates: fromDates,
        toDates: toDates,
        wrap: "",
        mainBlur: " main-blur"
    });
});

app.post('/', function (req, res){
    birthDay = req.body.birthDay;
    lifeExp = Number(req.body.totalYears);
    getData();
    res.render('index', {
        totalBlock: totalBlock,
        fillBlock: fillBlock,
        fromDates: fromDates,
        toDates: toDates,
        wrap: " hidden",
        mainBlur: ""
    });
});

app.get('/time', function (req, res) {
    getData();
    res.send({from:fromDates,
                to: toDates});
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server started");
});

function getData() {
    let birthDate = new Date(birthDay);
    let lastDate = new Date(birthDay);
    lastDate.setFullYear(birthDate.getFullYear() + lifeExp);
    let currDate = new Date();
    let newTime_ms = 0
    let newTime = new Date();
    let newTime1 = new Date();
    fillBlock = 0;
    totalBlock = -1;
    fromDates = [];
    toDates = [];
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };
   while (newTime_ms < lastDate.getTime()){
        newTime_ms = birthDate.getTime() + (1000 * 60 * 60 * 24 * 7 * (totalBlock + 1));
        newTime.setTime(newTime_ms);
        fromDates.push(newTime.toLocaleDateString("US-EN", options));
        newTime1.setTime(newTime_ms + (1000 * 60 * 60 * 24 * 6));
        toDates.push(newTime1.toLocaleDateString("US-EN", options));
        if (currDate.getTime() > newTime_ms){
            fillBlock++;
        }
     totalBlock++;
    }
}