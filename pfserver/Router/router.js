const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const projectController = require('../Controller/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')



// register api 

router.post('/user/register',userController.register)



//login api
router.post('/user/login',userController.login)



//export router
module.exports = router;


//add project

router.post("/projects/add",jwtMiddleware,projectController.addProjects);

