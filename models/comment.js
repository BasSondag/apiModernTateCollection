'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.hasOne(models.User, {
      foreignKey : 'id',
      sourceKey : 'userId'
    });
    Comment.belongsTo(models.Art, {
      foreignKey : 'id',
      sourceKey : 'commentId'
    });
  };
  return Comment;
};
