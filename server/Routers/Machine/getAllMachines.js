const express = require('express');
const router = express.Router();

const VerifyJWT = require("../middleware/verifyJWT.js")
const CheckAdminRole = require('../middleware/AdminRole.js');
const GetAllMachines = require('../../Controllers/Machine/getAllMachines.js');

router.get('/' , CheckAdminRole ,GetAllMachines) ;

module.exports = router ;