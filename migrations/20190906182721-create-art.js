'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Arts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accession_number: {
        type: Sequelize.STRING
      },
      artist: {
        type: Sequelize.STRING
      },
      artistRole: {
        type: Sequelize.STRING
      },
      artistId: {
        type: Sequelize.INTEGER
      },
      artistId: {
        type: Sequelize.INTEGER
      },
      dateText: {
        type: Sequelize.INTEGER
      },
      medium: {
        type: Sequelize.STRING
      },
      creditLine: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      acquisitionYear: {
        type: Sequelize.INTEGER
      },
      dimensions: {
        type: Sequelize.STRING
      },
      width: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      depth: {
        type: Sequelize.STRING
      },
      units: {
        type: Sequelize.STRING
      },
      inscription: {
        type: Sequelize.STRING
      },
      thumbnailCopyright: {
        type: Sequelize.STRING
      },
      thumbnailUrl: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Arts');
  }
};