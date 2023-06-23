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
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // groupId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
 
    // }
  },{
    underscored: true

  });
    
  // กำหนดลักษะณะความสัมพันธิ์ กับตารางอื่น

  Post.associate = models => {  
     Post.belongsTo(models.User, {
      foreignKey:{
        name: 'userId',
        allowNull: false
      },
      onDelete: 'CASCADE'
     })
     Post.hasMany(models.Comment, {
      foreignKey: {
        name: 'postId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    })
 
 
 
  }







 return Post;
};
