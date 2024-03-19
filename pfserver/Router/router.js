const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const projectController = require('../Controller/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddileware')




// register api 

router.post('/user/register',userController.register)



//login api
router.post('/user/login',userController.login)



//export router
module.exports = router;


//add project

// router.post("/projects/add",jwtMiddleware,projectController.addProjects);

router.post("/projects/add",jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)

// getUser projects

router.get('/user/allprojects',jwtMiddleware,projectController.allUserprojects)


// getAll projects

router.get('/projects/all',jwtMiddleware,projectController.getallprojects)


// getHome projects

router.get('/projects/homeprojects',projectController.getHomeprojects)