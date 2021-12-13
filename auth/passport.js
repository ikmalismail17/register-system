//js
const bcrypt = require("bcryptjs");
LocalStrategy = require("passport-local").Strategy;
//Load model
const User = require("../models/student");
const Admin = require("../models/admin");
const loginCheck = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      //Check customer
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            console.log("wrong email");
            return done();
          }
          //Match Password
          bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error) throw error;
            if (isMatch) {
              return done(null, user);
            } else {
              console.log("Wrong password");
              return done();
            }
          });
        })
        .catch((error) => console.log(error));
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user);
    });
  });
};

const adminCheck = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "name" }, (name, password, done) => {
      //Check customer
      Admin.findOne({ name: name })
        .then((admin) => {
          if (!admin) {
            console.log("wrong name");
            return done();
          }
          //Match Password
          bcrypt.compare(password, admin.password, (error, isMatch) => {
            if (error) throw error;
            if (isMatch) {
              return done(null, admin);
            } else {
              console.log("Wrong password");
              return done();
            }
          });
        })
        .catch((error) => console.log(error));
    })
  );
  passport.serializeUser((admin, done) => {
    done(null, admin.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (error, admin) => {
      done(error, admin);
    });
  });
};
module.exports = {
  loginCheck,
  adminCheck,
};
