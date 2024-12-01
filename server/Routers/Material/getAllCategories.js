const express = require('express');
const router = express.Router();

const GetAllCategories = require('../../Controllers/Material/getAllCategories.js')
const VerifyJWT = require("../../middleware/verifyJWT.js")
const CheckAdminRole = require('../middleware/AdminRole.js');

router.get('/categories' , VerifyJWT , CheckAdminRole , GetAllCategories );

module.exports = router ; 