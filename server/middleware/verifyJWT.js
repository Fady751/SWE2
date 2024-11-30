const jwt = require("jsonwebtoken");
const { query ,  pool} = require('../config/data_base'); 

const verifyJWT = async(req, res, next) => {
    const token = req.headers['authorization'] || ['authorization'];

    if (!token) return res.status(401).json({ message: 'Token missing' });

    jwt.verify(token, process.env.TOKEN_SECRET, async(err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        
        const user = await query(`select * from users where id = ${user.id}`);
        if(!user) return res.status(404).json({message : "user did not login !"});

        req.user = user[0];

        next();
    });
};

module.exports = verifyJWT;