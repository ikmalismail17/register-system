const express = require("express");
const routerUser = express.Router();
const {
  courseView,
  courseReg,
  deleteData,
} = require("../controllers/userPageController");
const { protectRoute } = require("../auth/protect");

//get
routerUser.get("/course", courseView);
routerUser.get("/deleteCourse/:id", deleteData);

//post
routerUser.post("/courseReg", courseReg);

module.exports = routerUser;
