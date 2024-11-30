const express = require('express');
const router = express.Router();

const AddMachine = require('../../Controllers/Machine/addMachine.js')
const VerifyJWT = require("../middleware/verifyJWT.js")
const CheckAdminRole = require('../middleware/AdminRole.js');

router.post('/addmachine' , VerifyJWT ,  CheckAdminRole  , 
            [
            body('longitude')
                .notEmpty()
                .withMessage({ message : "longitude is required"}),
            body('latitude')
            .notEmpty()
            .withMessage({ message : "latitude is required"}),
            body('name')
                .notEmpty()
                .withMessage({ message : "name is required"})
            ],AddMachine) ;

module.exports = router ; 