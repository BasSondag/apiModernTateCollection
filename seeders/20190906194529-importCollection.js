'use strict';
const fs = require('fs');
const csv = require('csv');
const models = require('../models');



module.exports = {
  up: (queryInterface, Sequelize) => {
      const input = fs.createReadStream('./the-tate-collection.csv');
      const parser = csv.parse({
        delimiter: ';',
        columns: true
      });
      const transform = csv.transform((row) => {
        const resultObject = {
          id: row['id'],
          accession_number: row['accession_number'],
          artist: row['artist'],
          artistRole: row['artistRole'],
          artistId: row['artistId'],
          title: row['title'],
          dateText: row['dateText'],
          medium: row['medium'],
          creditLine: row['creditLine'],
          year: row['year'],
          acquisitionYear: row['acquisitionYear'],
          dimensions: row['dimensions'],
          width: row['width'],
          height: row['height'],
          depth: row['depth'],
          units: row['units'],
          inscription: row['inscription'],
          thumbnailCopyright: row['thumbnailCopyright'],
          thumbnailUrl: row['thumbnailUrl'],
          url: row['url'],
          createdAt: new Date(),
          updatedAt: new Date()
        };
        return queryInterface.bulkInsert('Arts', [resultObject], {});
      }
      input.pipe(parser).pipe(transform);

  },
  down: (queryInterface, Sequelize) => {

     return queryInterface.bulkDelete('Arts', null, {})
