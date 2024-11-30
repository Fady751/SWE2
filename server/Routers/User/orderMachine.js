const express = require('express');
const router = express.Router();

const UserControllers = require('../Controllers/UserControllers.js/index.js')
const VerifyJWT = require("../middleware/verifyJWT.js")

router.post('/ordermachine' ,VerifyJWT , UserControllers.OrderMachine);

module.exports = router ;  