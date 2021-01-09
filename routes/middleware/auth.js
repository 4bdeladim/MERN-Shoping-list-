const jwt = require('jsonwebtoken');


const auth =  (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token) return res.status(401).json({ msg: 'No token, auth denided'});

    

    try {
        const decoded = jwt.verify(token, process.env.jwtSecret);
        req.user = decoded 
        next();
    } catch (error) {
        res.status(400).json({ msg: 'Token is not valid'})
    }

}


module.exports = auth 