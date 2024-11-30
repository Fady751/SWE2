const express = require('express');
const router = express.Router();

const GetUser = require('../../Controllers/User/getUser.js')
const VerifyJWT = require("../middleware/verifyJWT.js")
const CheckAdminRole = require('../middleware/AdminRole.js');

router.get('/user' , VerifyJWT ,CheckAdminRole ,GetUser) ;

module.exports = router ; 