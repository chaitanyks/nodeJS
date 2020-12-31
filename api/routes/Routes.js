'use strict';
module.exports = function(app) {
  var data = require('../controllers/Controller');

    app.route('/setRecord')
    .post(data.setRecord)

    app.route('/getRecord')
    .get(data.getRecord)


};
