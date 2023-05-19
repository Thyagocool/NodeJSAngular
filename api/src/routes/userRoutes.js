const route = require('express').Router();
const userController = require('../controllers/UserController')

route
    .get('/users', userController.selectAll)


module.exports = route