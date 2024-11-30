const express = require('express');
const router = express.Router();

const VerifyJWT = require("../middleware/verifyJWT.js")
const CheckAdminRole = require('../middleware/AdminRole.js');
const GetMachine = require('../../Controllers/Machine/getMachine.js');

router.get('/machine' , CheckAdminRole ,GetMachine) ;

module.exports = router ;