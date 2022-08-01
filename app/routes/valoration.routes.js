module.exports = (app) => {
    const valoration = require('../controllers/valoration.controller.js');

    // Create a new user
    app.post('/valorations', valoration.create);

    // List all user
    app.get('/valorations', valoration.findAll);

}