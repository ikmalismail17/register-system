const express = require("express");
const routerAdmin = express.Router();
const { protectAdminRoute } = require("../auth/protect");
const {
  registerView,
  registerCourse,
  deleteCourse,
  registerAdmin,
  registerAd,
} = require("../controllers/adminPageController");

//get
routerAdmin.get("/registercourse", protectAdminRoute, registerView);
routerAdmin.get("/delete/:id", deleteCourse);
routerAdmin.get("/registeradmin", registerAdmin);
//post
routerAdmin.post("/registercourse", registerCourse);
routerAdmin.post("/registeradmin", registerAd);

module.exports = routerAdmin;
