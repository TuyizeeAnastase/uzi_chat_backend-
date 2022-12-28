module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      profile: DataTypes.STRING
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Chart, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE",
    });
  };
  return User;
};
