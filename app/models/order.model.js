const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    
    idusuario: {
        type: Number,
        index: true,
        required: true,
        trim: true,
        minlength: 8
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
        enum : ['pequeño','mediano','grande','extra'],
        default: 'pequeño'      
    },

    direccion: {
        type: String,
        index: true,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 40

    },

    ciudad: {
        type: String,
        index: true,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 30

    },

    direcciondestino: {
        type: String,
        index: true,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 40
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
        minlength: 4,
        enum : ['solicitado','recibido','transito','entregado','cancelado'],
        default: 'recibido'
    }
});

module.exports = mongoose.model('Order', OrderSchema);