const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ error: 'Token missing' });

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });

        req.user = user;

        next();
    });
};

module.exports = verifyJWT;