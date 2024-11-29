const express = require('express');
const router = express.Router();

const UserControllers = require('../Controllers/UserControllers.js/index.js')
const VerifyJWT = require("../middleware/verifyJWT.js")

router.get('/notifications' ,VerifyJWT , UserControllers.GetAllNotifications);

module.exports = router ;  