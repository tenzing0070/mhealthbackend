const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Forgotpasswords = require('../models/forgotpasswords');
const router = express.Router();
const auth = require('../auth');

router.post('/password', auth.verifyUser,(req,res,next) => {
    Forgotpasswords.create({
        user:req.user._id,
        email:req.body.email,
    }).then((password) => {
      res.json(password);
    }).catch(next);

router.route('/myPasswords')
.get((req,res,next) => {
    Forgotpasswords.find({  })
    .populate('user')
    .then((password) => {
    res.json(password);
    }).catch((err) => next(err));
});


});

module.exports = router;
