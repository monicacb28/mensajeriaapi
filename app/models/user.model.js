const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    idusuario: {
        type: number,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 10
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
    }    
}
);

module.exports = mongoose.model('User', UserSchema);