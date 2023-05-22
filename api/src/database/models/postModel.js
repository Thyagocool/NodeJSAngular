const database = require("../config/connection");
const { Sequelize, Model, DataTypes } = require("sequelize");
const userModel = require("./userModel")

const postModel = database.define("posts", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },      
  post: Sequelize.STRING,
  id_author: {
    type: Sequelize.INTEGER
  },
}, {
  tableName: "posts"
});

postModel.belongsTo(userModel, {
  foreignKey: 'id_author'
});

postModel.associate = (models) => {
  postModel.belongsTo(models.userModel,{
    foreignKey: 'id_author',
    as: 'id_author'
  });
};

module.exports = postModel;