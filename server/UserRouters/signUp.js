const express = require('express');
const router = express.Router();

const UserControllers = require('../Controllers/UserControllers.js/index.js')

router.post( "/signup" , 
    [
        body('Password')
            .notEmpty()
            .withMessage({ message : "Password is required"})
            .isLength({min:8})
            .withMessage({ message : "Password must be at least 8 chars"})
            .matches(/\d/)
            .withMessage('Password must contain at least one number')
            .matches(/[a-zA-Z]/).
            withMessage('Password must contain at least one letter'),
        body('Email')
            .notEmpty()
            .withMessage({ message : "Email is required"})
            .isemail()
            .withMessage({ message : "Invalid email"}),

    ] , UserControllers.SignUp);

module.exports = router ;