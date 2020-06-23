const express = require('express');
const Faq = require('../models/faqs');
const router = express.Router();

router.route('/postFaq')
.post((req,res,next) => {
    let faq = new Faq(req.body);
    faq.save()
    .then((faq) => {
        res.statusCode = 201;
        res.json(faq);
    }).catch(next);
});

    router.route('/faqdetails')
    .get((req,res,next) => {
        Faq.find({})
        .then((faqs) => {
            res.json(faqs);
        }).catch((err) => next(err));
    });

    router.route('/faqdetails/:id')
    .get((req,res,next) => {
        Faq.findById(req.params.id)
        .then((faqs) => {
            res.json(faqs);
        }).catch((err) => next(err));
    });
    
    router.route('/faqdetails/:id')
    .put((req,res,next)=>{
        Faq.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        .then((faqs)=>{
            res.json(faqs);
   
        })
        .catch((err)=> next(err));
    })
    

    router.route('/faqdetails/:id')
    .delete((req, res, next) => {
        Faq.findByIdAndDelete(req.params.id)
        .then((faqs)=>{
            res.json(faqs);
        })
        .catch((err)=> next(err));
    });





module.exports = router;