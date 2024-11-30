const express = require('express');
const router = express.Router();
const {body , validationResult } = require('express-validator');

const SignUp = require('../../Controllers/User/SignUp')

router.post( "/signup" , 
    [
        body('Password')
            .notEmpty()
            .withMessage({ message : "Password is required"})
            .isLength({min:8})
            .withMessage({ message : "Password must be at least 8 chars"})
            .matches(/\d/)
            .withMessage('Password must contain at least one number')
            .matches(/[a-zA-Z]/)
            .withMessage('Password must contain at least one letter'),
        body('Email')
            .notEmpty()
            .withMessage({ message : "Email is required"})
            .isemail()
            .withMessage({ message : "Invalid email"}),

    ] , SignUp);

module.exports = router ;