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






 return Usergroup;
};
