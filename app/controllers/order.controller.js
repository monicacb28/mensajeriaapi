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
    orderby=req.query.orderBy;
    filtro=req.query.filter;
    console.log(filtro);
    //Order.find().sort(orderby)
    Order.find({estado: filtro}).sort(filtro).select({'_id':1,'estado':1})
    .then(orders => {
        res.status(200).send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while retrieving the records."
        });
    });
};


exports.findAllPending = (req, res) => {
    Order.find({ where: { estado: 'solicitado' } })
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving pending orders."
        });
    });
};



// Update a Order by its id
exports.update = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Order data can not be empty"
        });
    }
    // Find the Order and update it with the request body data
    Order.findByIdAndUpdate(req.params.id, {
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
    }, { new: true })
    .then(order => {
        if(!order) {
            return res.status(404).send({
            message: "Order not found with id:" + req.params.id
            });
        }
        res.status(200).send(order);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id:" + req.params.id
            });
        }
        return res.status(500).send({
        message: "Something wrong ocurred while updating the record with id:" +req.params.id
        });
    });
};

// Delete a Order by its id
exports.delete = (req, res) => {
    Order.findByIdAndRemove(req.params.id)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with id:" + req.params.id
            });
        }
        res.status(200).send({message: "Order deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Order not found with id:" + req.params.id
        });
    }
        return res.status(500).send({
            message: "Something wrong ocurred while deleting the record with id:" + req.params.id
        });
    });
};