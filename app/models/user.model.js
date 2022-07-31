const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    idusuario: {
        type: Number,
        index: true,
        unique: true,
        required: true,
        trim: true,
        min: 5
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    contrasena: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    }, 
});

module.exports = mongoose.model('User', UserSchema);