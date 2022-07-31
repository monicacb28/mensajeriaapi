const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    idusuario: {
        type: Number,
        index: true,
        unique: true,
        required: true,
        trim: true,
        min: 10
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: 20
    },
    contrasena: {
        type: String,
        required: true,
        trim: true,
        minlength: 20
    },
    expiration: Date
}, {
    timestamps: true       
});

module.exports = mongoose.model('User', UserSchema);