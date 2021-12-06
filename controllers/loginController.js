const User = require("../models/student");
const bcrypt = require("bcryptjs");
const passport = require("passport");

//For Register Page
const registerView = (req, res) => {
    res.render("register", {} );
}

const indexView = (req,res) => {
  res.render("index");
}

//Post Request that handles Register
const registerStudent = (req, res) => {
    const { name, email, location, password, confirm } = req.body;
    if (!name || !email || !password || !confirm) {
      console.log("Fill empty fields");
    }
    //Confirm Passwords
    if (password !== confirm) {
      console.log("Password must match");
    } else {
      //Validation
      User.findOne({ email: email }).then((user) => {
        if (user) {
          console.log("email exists");
          res.render("register", {
            name,
            email,
            password,
            confirm,
          });
        } else {
          //Validation
          const newUser = new User({
            name,
            email,
            location,
            password,
          });
          //Password Hashing
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(res.redirect("/login"))
                .catch((err) => console.log(err));
            })
          );
        }
      });
    }
  };

// For View 
const loginView = (req, res) => {

    res.render("login", {
    } );
}

const loginStudent = (req, res) => {
  const { email, password } = req.body;
  //Required
  if (!email || !password) {
    console.log("Please fill in all the fields");
    res.render("login", {
      email,
      password,
    });
  } else {
    passport.authenticate("local", {
      successRedirect: "/dashboard",
      failureRedirect: "/login",
      failureFlash: true,
    })(req, res);
  }
};

const logOutView = (req,res) => {
  req.logout();
  res.redirect('/');
}

module.exports =  {
    registerView,
    loginView,
    registerStudent,
    loginStudent,
    indexView,
    logOutView
};