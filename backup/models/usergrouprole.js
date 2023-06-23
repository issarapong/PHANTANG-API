const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Usergrouprole = sequelize.define("Usergrouprole", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },    
    roleLevel: {
      type: DataTypes.ENUM('Administrator', 'Modulator', 'Member'),
      defaultValue: 'Member',
      allowNull: false
    }
},{
    underscored: true

  });
    
  // กำหนดลักษะณะความสัมพันธิ์ กับตารางอื่น

Usergrouprole.associate = models => {
  Usergrouprole.belongsTo(models.User, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    onDelete: 'CASCADE'
  })

Usergrouprole.belongsTo(models.Group, {
    foreignKey: {
      name: 'GroupId',
      allowNull: true
    },
    onDelete: 'CASCADE'
})

}

 return Usergrouprole;
};
