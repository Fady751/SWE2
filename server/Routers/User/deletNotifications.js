const express = require('express');
const router = express.Router();

const DeleteMachine = require('../../Controllers/User/deletNotification.js')
const VerifyJWT = require('../../middleware/verifyJWT.js');

router.delete('/' , VerifyJWT , DeleteMachine )

module.exports = router 