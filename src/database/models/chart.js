module.exports = (sequelize, DataTypes) => {
  const Chart = sequelize.define(
    "Chart",
    {
      roomId: DataTypes.INTEGER,
      message: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Chart.associate = function (models) {
    Chart.belongsTo(models.Room, {
      foreignKey: "roomId",
      as: "room",
      onDelete: "CASCADE",
    });
    Chart.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE",
    });
  };
  return Chart;
};
