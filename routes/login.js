const express = require("express");
const {
  registerView,
  loginView,
  registerStudent,
  indexView,
  loginStudent,
  logOutView,
  adminLogin,
  loginAdmin,
} = require("../controllers/loginController");
const router = express.Router();
const { protectRoute, protectAdminRoute } = require("../auth/protect");
const {
  dashboardView,
  adminDashboard,
} = require("../controllers/dashboardController");

//get
router.get("/register", registerView);
router.get("/login", loginView);
router.get("/index", indexView);
router.get("/dashboard", dashboardView);
router.get("/logout", logOutView);
router.get("/adminlogin", adminLogin);
router.get("/admindashboard", adminDashboard);

//post
router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.post("/adminlogin", loginAdmin);

module.exports = router;
