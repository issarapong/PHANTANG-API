const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Joinrequest = sequelize.define("Joinrequest", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    requestDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },{
    underscored: true

  });
    
  // กำหนดลักษะณะความสัมพันธิ์ กับตารางอื่น






 return Joinrequest;
};
