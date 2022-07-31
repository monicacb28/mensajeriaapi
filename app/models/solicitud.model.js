const mongoose = require('mongoose');

const SolicitudSchema = mongoose.Schema({
    idsolicitud : {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
    },
    idusuario: {
        type: Number,
        index: true,
        unique: true,
        required: true,
        trim: true,
        min: 5
    },
    descripcion: {
        type: String,
        index: true,
        required: true,
        trim: true,
        minlength: 4
    },
    tamano: {
        type: String,
        index: true,
        required: false,
        trim: true,
        minlength: 4
    },
    direccion: {
        type: String,
        index: true,
        required: true,
        trim: true,
        minlength: 4
    },
    ciudad: {
        type: String,
        index: true,
        required: true,
        trim: true,
        minlength: 4
    },
    direcciondestino: {
        type: String,
        index: true,
        required: true,
        trim: true,
        minlength: 4
    },
    ciudaddestino: {
        type: String,
        index: true,
        required: true,
        trim: true,
        minlength: 4
    },
    nombredestinatario: {
        type: String,
        index: true,
        required: true,
        trim: true,
        minlength: 4
    },
    estado: {
        type: String,
        index: true,
        required: true,
        trim: true,
        minlength: 4
    }
});

module.exports = mongoose.model('Solicitud', SolicitudSchema);