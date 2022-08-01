const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    idusuario: {
        type: Number,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 8
    },
    
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    
    contrasena: {
        type: String,
        required: true,
        trim: true,
        minlength: 4
    }, 
});

module.exports = mongoose.model('User', UserSchema);