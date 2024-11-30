const express = require('express');
const router = express.Router();

const SignIn = require('../../Controllers/User/SignIn')

router.post( "/signin" , SignIn);

module.exports = router ;