const mongoose = require('mongoose');

const forgotpasswordsSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    email: {
        type:String,
        required: true
        
    }

});

module.exports = mongoose.model('Forgotpasswords', forgotpasswordsSchema );