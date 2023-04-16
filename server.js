const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const portNum = 8088;
const router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false, limit:"1mb", parameterLimit:"10000"});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine("html", hbs.__express);

app.engine('html', require('express-art-template'));

app.set("views", path.join(__dirname, ""));

app.use(express.static(path.join(__dirname, "")));

app.get("/", (req, res)=> {
    res.render("index.html");
});

app.get("/loginsuccess", (req, res)=> {
    res.render("loginsuccess.html");
});

app.get("/register", (req, res)=> {
    res.render("register.html");
});

app.post('/register', urlencodedParser, function(req, res) {
    console.log('Username:' + req.body.name);
    console.log('Email:' + req.body.email);
    console.log('Password:' + req.body.password);
    res.render("register.html");
});

app.get('/post', function (req, res) {
    res.render('post.html')
});

app.listen(portNum, ()=>{
    console.log(`Server is running at http://127.0.0.1:${portNum}`);
});

