module.exports = function(sequelize, DataTypes) {
  var Store = sequelize.define("Store", {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    ppu: DataTypes.DECIMAL(3, 2),
    quantity: DataTypes.INTEGER(4)
  });
  return Store;
};
