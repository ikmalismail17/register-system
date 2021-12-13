const Course = require("../models/course");
const Admin = require("../models/admin");
const bcrypt = require("bcryptjs/dist/bcrypt");

const registerView = (req, res) => {
  Course.find({}, (err, data) => {
    res.render("registercourse", {
      courses: data,
    });
  });
};

const registerCourse = (req, res) => {
  const { coursename, coursecode, duration } = req.body;
  if (!coursename || !coursecode || !duration) {
    console.log("Please fill all the fields");
  }
  Course.findOne({ code: coursecode }).then((course) => {
    if (course) {
      console.log("Course already exist");
      res.render("registercourse", {
        coursename,
        coursecode,
        duration,
      });
    } else {
      const newCourse = new Course({
        name: req.body.coursename,
        code: req.body.coursecode,
        duration: req.body.duration,
      }).save();
      res.redirect("/registercourse");
    }
  });
};
const registerAd = (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    console.log("Please fill all the fields");
  }
  Admin.findOne({ name: Admin }).then((admin) => {
    if (admin) {
      console.log("Admin already exist");
      res.render("adminreg", {
        name,
        password,
      });
    } else {
      const newAdmin = new Admin({
        name: req.body.name,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          newAdmin.password = hash;
          newAdmin
            .save()
            .then(res.redirect("/adminlogin"))
            .catch((err) => console.log(err));
        })
      );
    }
  });
};

const deleteCourse = (req, res) => {
  Course.findByIdAndRemove(req.params.id, (err, deleteRecord) => {
    if (!err) {
      res.redirect("/registercourse");
      console.log(deleteRecord);
    } else {
      res.redirect("/registercourse");
      console.log(err);
    }
  });
};

const registerAdmin = (req, res) => {
  res.render("adminreg");
};

module.exports = {
  registerView,
  registerCourse,
  deleteCourse,
  registerAdmin,
  registerAd,
};
