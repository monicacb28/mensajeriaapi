const mongoose = require('mongoose');

const SolicitudSchema = mongoose.Schema({
    descripcion: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
    },
    tamano: {
        type: String,
        index: true,
        unique: true,
        required: false,
        trim: true,
        minlength: 4
    },
    price: {
        type: Number,
        min: 10
    },
    expiration: Date
}, {
    timestamps: true    
});

module.exports = mongoose.model('Solicitud', SolicitudSchema);