const express = require('express');
const router = express.Router();

const UserControllers = require('../Controllers/UserControllers.js/index.js')

router.post( "/signin" , UserControllers.SignIn);

module.exports = router ;