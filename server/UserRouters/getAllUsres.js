const express = require('express');
const router = express.Router();

const UserControllers = require('../Controllers/UserControllers.js/index.js')
const VerifyJWT = require("../middleware/verifyJWT.js")
const CheckAdminRole = require('../middleware/AdminRole.js');

router.get('/' , VerifyJWT ,CheckAdminRole , UserControllers.GetAllUsers) ;

module.exports = router ; 