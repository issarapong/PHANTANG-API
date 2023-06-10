const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    underscored: true

  });
    
  // กำหนดลักษะณะความสัมพันธิ์ กับตารางอื่น






 return Comment;
};
