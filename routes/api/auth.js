require('dotenv').config()

const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//route POST api/users

router.post('/', (req, res) => {
    const { email, password } = req.body ;

    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all field'})
    }

    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exist'})
    })      

            
})





module.exports = router ;