const route = require('express').Router();
const postController = require('../controllers/PostController');
const  {tokenValited}  = require("../middleware/auth");

const authController = require('../controllers/AuthController')

route
    .get('/posts', tokenValited, postController.selectAll)
    .post('/posts', tokenValited, postController.createData)
    .put('/posts/:id', tokenValited, postController.updateData)
    .delete('/posts/:id', tokenValited, postController.deleteData)



module.exports = route