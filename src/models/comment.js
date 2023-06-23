const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    commentContent: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    underscored: true

  });
    
  // กำหนดลักษะณะความสัมพันธิ์ กับตารางอื่น
Comment.associate = models => {
  Comment.belongsTo(models.User, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    onDelete: 'CASCADE'
  })
   Comment.belongsTo(models.Post, {
    foreignKey: {
      name: 'postId',
      allowNull: true
    },
    onDelete: 'CASCADE'
   })



}

 return Comment;
};
