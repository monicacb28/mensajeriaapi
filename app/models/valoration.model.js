const mongoose = require('mongoose');

const ValorationSchema = mongoose.Schema({
    
    order_id : {
        type: String,
        index: true,
        required: true,
        trim: true
        
    },
    
    stars_number: {
        type: Number,
        index: true,
        required: true,
        trim: true,
        default:5,
        min:1,
        max:5,
        minlength: 1,
        maxlength: 1
    },
    
    observation: {
        type: String,
        required: false,
        trim: true,
        default: null,
        minlength: 4
    }
});

module.exports = mongoose.model('Valoration', ValorationSchema);