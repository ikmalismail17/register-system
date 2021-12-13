const express = require("express");
const routerUser = express.Router();
const { courseView } = require("../controllers/userPageController");
const { protectRoute } = require("../auth/protect");

routerUser.get("/course", protectRoute, courseView);

module.exports = routerUser;
