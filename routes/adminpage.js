const express = require('express')
const routerAdmin = express.Router()
const { registerView, registerCourse } = require('../controllers/adminPageController')

//get
routerAdmin.get('/registercourse', registerView)

//post
routerAdmin.post('/registercourse', registerCourse)


module.exports = routerAdmin;