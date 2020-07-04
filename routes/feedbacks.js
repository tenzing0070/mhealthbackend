const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Feedback = require('../models/feedbacks');
const router = express.Router();

router.post('/feed', (req,res,next) => {
    Feedback.create({
        email:req.body.email,
        message:req.body.message
    }).then((feedback) => {
        let token = jwt.sign({_id:feedback._id}, process.env.SECRET);
        res.json({status: "Update Success", feedback:feedback._id, token: token});
    }).catch(next);

});

router.route('/feedbackdetails')
    .get((req,res,next) => {
        Feedback.find({})
        .then((feedbacks) => {
            res.json(feedbacks);
        }).catch((err) => next(err));
    });

    router.route('/feedbackdetails/:id')
    .get((req,res,next) => {
        Feedback.findById(req.params.id)
        .then((feedbacks) => {
            res.json(feedbacks);
        }).catch((err) => next(err));
    });
    
    router.route('/feedbackdetails/:id')
    .put((req,res,next)=>{
        Feedback.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        .then((feedbacks)=>{
            res.json(feedbacks);
   
        })
        .catch((err)=> next(err));
    })
    

    router.route('/feedbackdetails/:id')
    .delete((req, res, next) => {
        Feedback.findByIdAndDelete(req.params.id)
        .then((feedbacks)=>{
            res.json(feedbacks);
        })
        .catch((err)=> next(err));
    });


module.exports = router;

