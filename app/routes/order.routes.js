module.exports = (app) => {
    const orders = require('../controllers/order.controller.js');

    // Create a new order
    app.post('/orders', orders.create);

    // List all orders
    app.get('/orders', orders.findAll);

    // Update a order by id
    app.put('/orders/:id', orders.update);

     // Delete a order by id
     app.delete('/orders/:id', orders.delete);
}