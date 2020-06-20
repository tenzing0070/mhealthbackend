const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({

    email: {
        type:String,
        required: true,
        unique:true
        
    },

});

module.exports = mongoose.model('Password', passwordSchema );