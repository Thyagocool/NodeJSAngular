const { Sequelize } = require('sequelize');
const optionsDatabase = require('./database');

const sequelize = new Sequelize(
    optionsDatabase
);

module.exports = sequelize;