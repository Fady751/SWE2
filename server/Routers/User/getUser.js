const express = require('express');
const router = express.Router();

const GetUser = require('../../Controllers/User/getUser.js')
const VerifyJWT = require("../../middleware/verifyJWT.js")

router.get('/' , VerifyJWT, GetUser);

module.exports = router;