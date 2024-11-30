const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../config/data_base'); 
const {body , validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const generatejwt = require('../../middleware/GenerateJWT');
const { sign } = require('crypto');

app.use(express.json());

const SignUp = async(req , res)=>{
    // be sure i will found it like this sorting !
    const {name , email , gender , password } = req.body ;
    const role = "";

    const found = await query (`select * from users where email = '${email}' and name = '${name}'`);
    if (found) return res.status(409).json({message : "Already have an account"});
    
    const validData = validationResult(req.body);
    if(!validData) res.status(401).json({message : validData}) ;


    const hashedPass = await bcrypt.hash(password, 10);

    const numberOfUser = await query(`select * from users`) ;
    if(numberOfUser == null || numberOfUser.lenght == 0 ) role = "Admin" ;
    else role = "User" ; 

    await query(`insert into users 
        (name , email , gender , role ,password ) 
        values 
        ('${name}' , '${email}' , '${gender}') , '${role}' , '${password}'`) ;

    const token = generatejwt({id : numberOfUser.lenght+1 }) ; 
    return res.status(200).json({message: "sign up successfully" , token }) ;
} 


module.exports = SignUp ; 