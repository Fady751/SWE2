const express = require('express');
const router = express.Router();

const UserControllers = require('../Controllers/UserControllers.js/index.js')
const VerifyJWT = require("../middleware/verifyJWT.js");

router.post('/selectMaterial' ,VerifyJWT ,  UserControllers.SelectMatrial) ;

module.exports = router ;