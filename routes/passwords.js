const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Password = require('../models/passwords');
const router = express.Router();


router.post('/pass',(req,res,next) => {
    Password.create({
        email:req.body.email
    }).then((password) => {
        let token = jwt.sign({_id:password._id}, process.env.SECRET);
        res.json({status: "Submit Success", password:password._id, token: token});
    }).catch(next);


});

module.exports = router;
