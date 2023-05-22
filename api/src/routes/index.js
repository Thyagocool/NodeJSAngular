const express = require('express');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');


const routes = (app) => {
    app.use(
        userRoutes,
        postRoutes
    );
};


module.exports = routes;