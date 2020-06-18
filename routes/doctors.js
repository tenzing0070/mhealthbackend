const express = require('express');
const Doctor = require('../models/doctors');
const router = express.Router();

router.route('/postDoctor')
.post((req,res,next) => {
    let doctor = new Doctor(req.body);
    doctor.save()
    .then((doctor) => {
        res.statusCode = 201;
        res.json(doctor);
    }).catch(next);
});

    router.route('/doctordetails')
    .get((req,res,next) => {
        Doctor.find({})
        .then((doctors) => {
            res.json(doctors);
        }).catch((err) => next(err));
    });

    router.route('/doctordetails/:id')
    .get((req,res,next) => {
        Doctor.findById(req.params.id)
        .then((doctors) => {
            res.json(doctors);
        }).catch((err) => next(err));
    });
    
    router.route('/doctordetails/:id')
    .put((req,res,next)=>{
        Doctor.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        .then((doctors)=>{
            res.json(doctors);
   
        })
        .catch((err)=> next(err));
    })
    

    router.route('/doctordetails/:id')
    .delete((req, res, next) => {
        Doctor.findByIdAndDelete(req.params.id)
        .then((doctors)=>{
            res.json(doctors);
        })
        .catch((err)=> next(err));
    });


    router.put('/:id', (req, res, next)=>{
    bookdoctor={
        booked_by:req.user,
        booking_status:true,
        purpose:req.body.purpose
    }
        Doctor.findByIdAndUpdate(req.params.id, {$set:bookdoctor}, {new:true})
        .then((reply)=>{
            if(reply==null) throw new Error("doctors not found");
            res.json(reply);
        }).catch(next);
    });


module.exports = router;