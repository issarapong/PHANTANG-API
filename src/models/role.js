const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
    roleName: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  },{
    underscored: true

  });
    
  // กำหนดลักษะณะความสัมพันธิ์ กับตารางอื่น






 return Role;
};
