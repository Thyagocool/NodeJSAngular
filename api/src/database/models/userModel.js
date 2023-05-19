const database = require("../config/connection");
const { Sequelize, Model, DataTypes } = require("sequelize");

const userModel = database.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  email: Sequelize.STRING(30),
  password: Sequelize.STRING
}, {
  tableName: "users"
});

module.exports = userModel;