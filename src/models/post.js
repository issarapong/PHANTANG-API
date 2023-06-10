const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {

    postTopic: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    postContent: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
 
    }
  },{
    underscored: true

  });
    
  // กำหนดลักษะณะความสัมพันธิ์ กับตารางอื่น






 return Post;
};
