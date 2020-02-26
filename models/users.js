module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    picture: DataTypes.STRING,
    birthday: DataTypes.DATE,
    ocupation: DataTypes.STRING,
    location: DataTypes.STRING,
    coachingInterests: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    ratings:DataTypes.INTEGER,
    testimonials: DataTypes.TEXT,
    hobbies: DataTypes.TEXT,
  });
  return Users;
};
