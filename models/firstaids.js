const mongoose = require('mongoose');

const firstaidSchema = new mongoose.Schema({

   
    codename: {
        type:Number,
        required:true
    },
    instruction: {
        type: String,
    },
    description: {
        type:String,
        required: true
    },
    image: {
        type:String,
        required: true
    } 
});

module.exports = mongoose.model('Firstaid', firstaidSchema);