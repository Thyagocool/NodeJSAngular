const express = require('express');
const userRoutes = require('./userRoutes');


const routes = (app) => {
    app.use(
        userRoutes
    );
};


module.exports = routes;