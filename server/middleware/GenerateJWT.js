const jwt = require("jsonwebtoken");

function generateJWT(payload) {
    try {
      const token = jwt.sign(payload, process.env.TOKEN_SECRET);
      return token;
    } 
    catch (err) {
      return null ;
    }

}

module.exports = verifyJWT;