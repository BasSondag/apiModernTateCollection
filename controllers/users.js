var models = require('../models/index');
var Sequelize = require('sequelize');

module.exports = (function() {
	return {

    index: function (req, res) {
      models.User.all()
      .then(users => {
        res.json({users:users});
      })
      .catch(function(err) {
        return res.status(400).send(err);
      })

    },

		create: function(req, res) {
			models.User.create({
				name: req.name,
				age: req.age,
				location: req.location
			}).then(function(user) {
                //Does this after creating
                res.json({success: true, errors: null, user:user});
            }).catch(Sequelize.ValidationError, function (err) {
	            // respond with validation errors
             	res.status(422).json(err.errors);
            }).catch(function(err) {
                //Catches Errors
                return res.status(400).send(err);
            })
		},
})();
