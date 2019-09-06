'use strict';
module.exports = (sequelize, DataTypes) => {
  const Art = sequelize.define('Art', {
    accession_number: DataTypes.STRING,
    artist: DataTypes.STRING,
    artistRole: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER,
    dateText: DataTypes.INTEGER,
    medium: DataTypes.STRING,
    creditLine: DataTypes.STRING,
    year: DataTypes.INTEGER,
    acquisitionYear: DataTypes.INTEGER,
    dimensions: DataTypes.STRING,
    width: DataTypes.STRING,
    height: DataTypes.STRING,
    depth: DataTypes.STRING,
    units: DataTypes.STRING,
    inscription: DataTypes.STRING,
    thumbnailCopyright: DataTypes.STRING,
    thumbnailUrl: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Art.associate = function(models) {
    // associations can be defined here
    Art.hasMany(models.Comment, {
      foreignKey : 'id',
      sourceKey : 'commentId'
    });
  };
  return Art;
};
