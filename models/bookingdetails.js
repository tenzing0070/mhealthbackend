const mongoose = require('mongoose');

const bookingdetailsSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    doctors:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    purpose:{
        type: String,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    hours:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Bookingdetails', bookingdetailsSchema);