const Order = require('../models/order.model.js');

// Create and save a new order

exports.create = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Order data can not be empty"
        });
    }

    // Create a new order with request's data
    const order = new Order({
        idsolicitud: req.body.idsolicitud,
        idusuario: req.body.idusuario,
        descripcion: req.body.descripcion,
        tamano: req.body.tamano,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad,
        direcciondestino: req.body.direcciondestino,
        ciudaddestino: req.body.ciudaddestino,
        nombredestinatario: req.body.nombredestinatario,
        estado: req.body.estado
    });

    // Save the order in the database
    order.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while creating the record."
        });
    });
};

// Retrieve and list all orders
exports.findAll = (req, res) => {
    Order.find()
    .then(orders => {
        res.status(200).send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while retrieving the records."
        });
    });
};