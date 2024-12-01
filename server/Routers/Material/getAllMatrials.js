const express = require('express');
const router = express.Router();

const GetAllMaterial = require('../../Controllers/User/editProfile.js')
const VerifyJWT = require("../../middleware/verifyJWT.js")
const CheckAdminRole = require('../middleware/AdminRole.js');

router.get('/' , VerifyJWT , CheckAdminRole , GetAllMaterial);

module.exports = router ; 