const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({

    firstname:{
        type:String,
        require: true

    },
    lastname: {
        type: String,
        required: true
    },
    specialist: {
        type:String,
        required:true
    },
    image: {
        type: String
    },
    gender: {
        type:String,
        required: true
    },
    price: {
        type:String,
        required: true
    } 
});

module.exports = mongoose.model('Doctor', doctorSchema);