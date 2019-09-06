var models = require('../models/index');
var Sequelize = require('sequelize');

module.exports = (function() {
	return {

    index: function (req, res) {
      models.Art.all()
      .then(arts => {
        res.json({arts:arts});
      })
      .catch(function(err) {
        return res.status(400).send(err);
      })

    },

		show: function(req, res) {
		    models.Art.findOne({where: {id:  req.body.id}})
        .then(art => {
            res.json({art:art});

         })
        .catch(function(err) {
          return res.status(400).send(err);
		},
})();
