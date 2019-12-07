module.exports = function(sequelize, DataTypes) {
  var STORE = sequelize.define("Store", {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    ppu: DataTypes.DECIMAL(3, 2),
    quantity: DataTypes.INTEGER(4)
  });
  return STORE;
};
