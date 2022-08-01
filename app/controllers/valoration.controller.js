const Valoration = require('../models/valoration.model.js');

// Create and save a new Valoration
exports.create = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Valoration data can not be empty"
        });
    }

    // Create a new Valoration with request's data
    const valoration = new Valoration({
        order_id: req.body.order_id,
        stars_number: req.body.stars_number,
        observation: req.body.observation
    });

    // Save the Valoration in the database
    valoration.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while creating the record."
        });
    });
};

// Retrieve and list all Valorations
exports.findAll = (req, res) => {
    Valoration.find()
    .then(Valorations => {
        res.status(200).send(Valorations);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while retrieving the records."
        });
    });
};