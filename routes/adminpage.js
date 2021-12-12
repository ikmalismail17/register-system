const express = require("express");
const routerAdmin = express.Router();
const {
  registerView,
  registerCourse,
  deleteCourse,
} = require("../controllers/adminPageController");

//get
routerAdmin.get("/registercourse", registerView);

//post
routerAdmin.post("/registercourse", registerCourse);

routerAdmin.get("/delete/:id", deleteCourse);

module.exports = routerAdmin;
