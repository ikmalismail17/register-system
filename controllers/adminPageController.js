const Course = require("../models/course");

const registerView = (req, res) => {
  Course.find({}, (err, data) => {
    res.render("registercourse", {
      courses: data,
    });
  });
};

const registerCourse = (req, res) => {
  const { coursename, coursecode } = req.body;
  if (!coursename || !coursecode) {
    console.log("Please fill all the fields");
  }
  Course.findOne({ code: coursecode }).then((course) => {
    if (course) {
      console.log("Course already exist");
      res.render("registercourse", {
        coursename,
        coursecode,
      });
    } else {
      const newCourse = new Course({
        name: req.body.coursename,
        code: req.body.coursecode,
      }).save();
      res.redirect("/registercourse");
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

module.exports = {
  registerView,
  registerCourse,
  deleteCourse,
};
