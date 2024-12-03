const express = require('express');
const router = express.Router();

const EditUserRole = require('../../Controllers/User/editUserRole.js')
const VerifyJWT = require('../../middleware/verifyJWT.js')
const CheckAdminRole = require('../../middleware/AdminRole.js');

router.patch('/edituser' , VerifyJWT ,CheckAdminRole , EditUserRole);

module.exports = router ; 