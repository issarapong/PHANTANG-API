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
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
},{
    underscored: true

  });
    
  // กำหนดลักษะณะความสัมพันธิ์ กับตารางอื่น






 return Usergrouprole;
};
