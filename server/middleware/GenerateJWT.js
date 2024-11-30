const jwt = require("jsonwebtoken");

function generateJWT(payload) {
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '5m' });
  return token;
}

module.exports = generateJWT;