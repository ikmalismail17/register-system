const Course = require("../models/course");

const courseView = (req, res) => {
  Course.find({}, (err, data) => {
    res.render("course", {
      courses: data,
    });
  });
};

module.exports = {
  courseView,
};
