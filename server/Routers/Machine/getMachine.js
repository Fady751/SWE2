const express = require('express');
const router = express.Router();

const CheckAdminRole = require('../../middleware/AdminRole.js');
const GetMachine = require('../../Controllers/Machine/getMachine.js');
const verifyJWT = require('../../middleware/verifyJWT.js');

router.get('/machine' , verifyJWT ,CheckAdminRole ,GetMachine) ;

module.exports = router ;