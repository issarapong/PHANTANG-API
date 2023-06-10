const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define("Group", {
    groupName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    groupDescription: {
      type: DataTypes.STRING(255),
      allowNull: true
    },

    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    underscored: true

  });
    
  // กำหนดลักษะณะความสัมพันธิ์ กับตารางอื่น






 return Group;
};
