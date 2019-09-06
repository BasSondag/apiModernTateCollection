const users = require('../controllers/users.js');
const comments = require('../controllers/comments.js');
const arts = require('../controllers/arts.js');
const path = require('path');


module.exports= function(app) {

//###########################################################################

    /// Users controller
    app.get('/api/users', function(req, res) {
      users.index(req, res);
    });
    app.get('/api/users', function(req, res) {
      users.create(req, res);
    });

//###########################################################################

    /// Arts controler
    app.get('/api/art', function(req, res) {
      arts.index(req, res);
    });
    app.get('/api/art/ID', function(req, res) {
      arts.show(req, res);
    })


//###########################################################################

    //Comments controller
    app.post('/api/art/ID/comments', function(req, res) {
      arts.create(req, res);
    })


};
