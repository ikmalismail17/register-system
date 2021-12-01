const express = require('express');
const path = require('path');
const route = require('./routes/login');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const loginCheck = require('./auth/passport');
const passport = require('passport');
//init app
const app = express();

//session
const session = require('express-session');

//BodyParsing
app.use(express.urlencoded({extended: false}));

dotenv.config();
// Mongo DB connection
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Connect Successfull'))
.catch(err => console.log(err));

//load view engine
app.set('view engine', 'ejs');

//session continues
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
}));
// middleware /session
app.use(passport.initialize());
app.use(passport.session());

//load from routes file
app.use('/', route);

app.get('/', (req,res) => {
    res.render('index');
});

//run server
app.listen(3000, '0.0.0.0',function () {
    console.log("Server start on port 3000");
});

//declare path
app.use('/public/image', express.static('public/image/'));
app.use('/public/css', express.static('public/css/'));
app.use('/public/js', express.static('public/js/'));