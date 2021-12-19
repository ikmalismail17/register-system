const express = require("express");
const routerAdmin = express.Router();
const { protectAdminRoute } = require("../auth/protect");
const {
  registerView,
  registerCourse,
  deleteCourse,
  registerAdmin,
  registerAd,
  editCourse,
  updateCourse,
  deleteStudent,
} = require("../controllers/adminPageController");

//get
routerAdmin.get("/registercourse", registerView);
routerAdmin.get("/delete/:id", deleteCourse);
routerAdmin.get("/registeradmin", registerAdmin);
routerAdmin.get("/edit/:id", editCourse);
routerAdmin.get("/deleteStudent/:id", deleteStudent);

//post
routerAdmin.post("/registercourse", registerCourse);
routerAdmin.post("/registeradmin", registerAd);
routerAdmin.post("/updatecourse", updateCourse);

module.exports = routerAdmin;
