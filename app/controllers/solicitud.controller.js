const User = require('../models/solicitud.model.js');

// Create and save a new solicitud

exports.create = (req, res) => {
    // Validate if the request's body is empty
    // (does not include required data)
    if(Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Solicitud data can not be empty"
        });
    }

    // Create a new solicitud with request's data
    const solicitud = new Solicitud({
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

    // Save the solicitud in the database
    solicitud.save()
    .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong occurred while creating the record."
        });
    });
};

// Retrieve and list all solicitud
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