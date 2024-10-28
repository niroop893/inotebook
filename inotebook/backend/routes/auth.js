const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');

//Create User using: POST "/api/auth"
router.post('/',[
    body('name', 'Enter valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({min: 5})
]
     ,(req, res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(user => res.json(user))
        .catch(err => {console.log(err)
        res.json({error: 'Plesae enter and unique value', message: err.message})})
 
    
})

module.exports = router