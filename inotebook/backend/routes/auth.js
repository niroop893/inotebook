const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'Nirooplearnre@ct'

//Create User using: POST "/api/auth/createuser" no login requried
router.post('/createuser',[
    body('name', 'Enter valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({min: 5})
]
     , async (req, res)=>{
        //if there are errors, return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        try {
        // check with user with same email exist already
        let user = await User.findOne({email: req.body.email})
        if (user) {
            return res.status(400).json({error: "Sorry user with this email already exists"})
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        
        // .then(user => res.json(user))
        // .catch(err => {console.log(err)
        // res.json({error: 'Plesae enter and unique value', message: err.message})})
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        
        res.json({authToken});
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Some error occured")
    }
    
})

// Authenticate a user using post: '/api/auth/login' , no login required

router.post('/login',[
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

    const {email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please login with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
                return res.status(400).json({error: "Please login with correct credentials"});
            }
            const data = {
                user: {
                    id: user.id
                }
            }
            // JWT Token Creation
        const authToken = await jwt.sign(data, JWT_SECRET)
            res.json({authToken})

    }  catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})
module.exports = router