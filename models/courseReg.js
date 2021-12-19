const mongoose = require("mongoose");
const CourseRegSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});
const CourseReg = mongoose.model("coursereg", CourseRegSchema);
module.exports = CourseReg;
