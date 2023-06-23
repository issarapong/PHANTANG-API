const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Usergroup = sequelize.define("Usergroup", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    joinDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },{
    underscored: true

  });
    
  // กำหนดลักษะณะความสัมพันธิ์ กับตารางอื่น

Usergroup.associate = models => { 
  Usergroup.belongsTo(models.User, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    onDelete: 'CASCADE'
  })

  Usergroup.belongsTo(models.Group, {
    foreignKey: {
      name: 'groupId',
      allowNull: true
    },
    onDelete: 'CASCADE'

  })

}




 return Usergroup;
};
