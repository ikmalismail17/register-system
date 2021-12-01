const express = require('express');
const {registerView, loginView, registerStudent, indexView, loginStudent, logOutView } = require('../controllers/loginController');
const router = express.Router();
const { protectRoute} = require("../auth/protect");
const { dashboardView } = require("../controllers/dashboardController");

//get
router.get('/register', registerView);
router.get('/login', loginView);
router.get('/index', indexView);
router.get("/dashboard", protectRoute, dashboardView);
router.get('/logout', logOutView);

//post
router.post('/register', registerStudent);
router.post('/login', loginStudent);


module.exports = router;