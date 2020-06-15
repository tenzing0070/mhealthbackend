const express = require('express');
const Firstaid = require('../models/firstaids');
const router = express.Router();

router.route('/postFirstaid')
.post((req,res,next) => {
    let firstaid = new Firstaid(req.body);
    firstaid.save()
    .then((firstaid) => {
        res.statusCode = 201;
        res.json(firstaid);
    }).catch(next);
});

    router.route('/firstaiddetails')
    .get((req,res,next) => {
        Firstaid.find({})
        .then((firstaids) => {
            res.json(firstaids);
        }).catch((err) => next(err));
    });

    router.route('/firstaiddetails/:id')
    .get((req,res,next) => {
        Firstaid.findById(req.params.id)
        .then((firstaids) => {
            res.json(firstaids);
        }).catch((err) => next(err));
    });
    
    router.route('/firstaiddetails/:id')
    .put((req,res,next)=>{
        Firstaid.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        .then((firstaids)=>{
            res.json(firstaids);
   
        })
        .catch((err)=> next(err));
    })
    

    router.route('/firstaiddetails/:id')
    .delete((req, res, next) => {
        Firstaid.findByIdAndDelete(req.params.id)
        .then((firstaids)=>{
            res.json(firstaids);
        })
        .catch((err)=> next(err));
    });


    // router.put('/:id', (req, res, next)=>{
    // bookstaff={
    //     booked_by:req.user,
    //     booking_status:true,
    //     purpose:req.body.purpose
    // }
    //     Staff.findByIdAndUpdate(req.params.id, {$set:bookstaff}, {new:true})
    //     .then((reply)=>{
    //         if(reply==null) throw new Error("staffs not found");
    //         res.json(reply);
    //     }).catch(next);
    // });


module.exports = router;