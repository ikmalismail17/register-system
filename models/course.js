const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});
const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
