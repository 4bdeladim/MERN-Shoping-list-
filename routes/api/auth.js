require('dotenv').config()

const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
//route POST api/users

router.post('/login', (req, res) => {
    const { email, password } = req.body ;

    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all field'})
    }

    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exist'})

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msgg: 'invalid cre'})

                    jwt.sign(
                        { id: user.id },
                        process.env.jwtSecret,
                        (err, token) => {
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
    })      

            
});



router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
})





module.exports = router ;