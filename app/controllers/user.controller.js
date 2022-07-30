const User = require('../models/user.model.js');

// Create and save a new user

exports.create = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "User data can not be empty"
        });
    }

    // Create a new user with request's data
    const user = new User({
        idusuario: req.body.idusuario,
        nombre: req.body.nombre,
        contrasena: req.body.contrasena
    });

    // Save the user in the database
    user.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while creating the record."
        });
    });
};

// Retrieve and list all Products
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.status(200).send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while retrieving the records."
        });
    });
};