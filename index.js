const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const userRouter = require('./routes/users');
const doctorRouter = require('./routes/doctors');
const firstaidRouter = require('./routes/firstaids');
const feedbackRouter = require('./routes/feedbacks');
const uploadRouter = require('./routes/upload');
const bookingdetailsRouter = require('./routes/bookingdetails');
const forgotpasswordsRouter = require('./routes/forgotpasswords');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
//app.use('uploads/',express.static(__dirname + "public/uploads"));

app.use(express.static(__dirname + "/public/uploads"))

const auth = require('./auth');
app.use(express.urlencoded({extended: true }));

app.options('*',cors());
app.use(cors());


mongoose.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then((db) => {
        console.log("Successfully connected to Mongodb server");    
    }, (err) => console.log(err));

    app.use('/users', userRouter);
    app.use('/doctors', doctorRouter);
    app.use('/firstaids', firstaidRouter);
    app.use(auth.verifyUser);
    
    app.use('/feedbacks',feedbackRouter);
    app.use('/upload', uploadRouter);
    app.use('/bookingdetails', bookingdetailsRouter);
    app.use('/forgotpasswords', forgotpasswordsRouter);
    


    
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({message: err.message});
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost: ${process.env.PORT}`);
});