const Course = require("../models/course");
const CourseReg = require("../models/courseReg");

const courseView = (req, res) => {
  Course.find({}, (err, data) => {
    res.render("course", {
      courses: data,
    });
  });
};

const courseReg = (req, res) => {
  const { name, code } = req.body;
  if (!name || !code) {
    console.log("Please fill all the fields");
  }
  CourseReg.findOne({ code: code }).then((course) => {
    if (course) {
      console.log("Course already exist");
      res.render("registercourse", {
        name,
        code,
      });
    } else {
      const newCourseReg = new CourseReg({
        name: "Student 1",
        code: req.body.code,
      }).save();
      res.redirect("/dashboard");
    }
  });
};

const deleteData = (req, res) => {
  CourseReg.findByIdAndDelete(req.params.id, (err, deleteRecord) => {
    if (!err) {
      console.log(deleteRecord);
      res.redirect("/dashboard");
    } else {
      console.log(err);
      res.redirect("/dashboard");
    }
  });
};

module.exports = {
  courseView,
  courseReg,
  deleteData,
};
