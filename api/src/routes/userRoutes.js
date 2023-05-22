const route = require('express').Router();
const userController = require('../controllers/UserController');
const  {tokenValited}  = require("../middleware/auth");

const authController = require('../controllers/AuthController')


route
    .get('/users', tokenValited, userController.selectAll)
    .post('/users', tokenValited, userController.createData)
    .put('/users/:id', tokenValited, userController.updateData)
    .delete('/users/:id', tokenValited, userController.deleteData)
    .post("/login", authController.authUser)



module.exports = route