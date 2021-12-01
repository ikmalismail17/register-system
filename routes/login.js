const express = require('express');
const {registerView, loginView, registerStudent, indexView } = require('../controllers/loginController');
const router = express.Router();
const { protectRoute } = require("../auth/protect");
const { dashboardView } = require("../controllers/dashboardController");

router.get('/register', registerView);
router.post('/register', registerStudent);
router.get('/login', loginView);
router.get('/index', indexView);
router.get("/dashboard", protectRoute, dashboardView);


module.exports = router;