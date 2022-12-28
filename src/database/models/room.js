module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    "Room",
    {
      name: DataTypes.STRING,
      room_id: DataTypes.INTEGER,
      profile: DataTypes.STRING,
    },
    {}
  );
  Room.associate = function (models) {
    Room.hasMany(models.Chart, {
      foreignKey: "roomId",
      as: "room",
      onDelete: "CASCADE",
    });
  };
  return Room;
};
