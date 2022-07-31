const mongoose = require('mongoose');

const CalificacionSchema = mongoose.Schema({
    idcalificacion : {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
    },
    idsolicitud : {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
    },
    calificacion: {
        type: Number,
        index: true,
        required: true,
        trim: true,
        minlength: 1
    },
    observaciones: {
        type: String,
        index: true,
        required: false,
        trim: true,
        minlength: 4
    }
});

module.exports = mongoose.model('Calificacion', CalificacionSchema);