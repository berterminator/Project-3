module.exports = function(sequelize, DataTypes) {
    var Coaches = sequelize.define("coaches", {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      picture: DataTypes.STRING,
      category: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      location: DataTypes.STRING,
      fee: DataTypes.INTEGER,
      languages: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      twitter: DataTypes.STRING,
      website: DataTypes.STRING,
      personalstatement: DataTypes.TEXT,
      education: DataTypes.STRING,
      opendays: DataTypes.STRING,
      ratings:DataTypes.INTEGER,
      testimonials: DataTypes.TEXT,
    });
    return Coaches;
  };