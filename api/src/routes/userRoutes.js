const route = require("express").Router();

route
    .get('/', (req, res) => {
        console.log('Hello USers')

        res.send('Hello there')
    })


module.exports = route