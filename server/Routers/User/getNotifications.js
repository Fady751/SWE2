const express = require('express');
const router = express.Router();

const GetAllNotifications = require('../../Controllers/User/getAllNotifications');
const VerifyJWT = require("../../middleware/verifyJWT.js")

router.get('/notifications' ,VerifyJWT , GetAllNotifications);

module.exports = router ;  