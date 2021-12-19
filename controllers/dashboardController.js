const CourseReg = require("../models/courseReg");
const Student = require("../models/student");

const dashboardView = (req, res) => {
  CourseReg.find({}, (err, data) => {
    res.render("dashboard", {
      coursereg: data,
    });
  });
};

const adminDashboard = (req, res) => {
  Student.find({}, (err, data) => {
    res.render("admindashboard", {
      students: data,
    });
  });
};

module.exports = {
  dashboardView,
  adminDashboard,
};
