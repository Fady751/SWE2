const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 
const {body , validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const generatejwt = require('../../middleware/GenerateJWT');

app.use(express.json());

const SignIn = async(req , res )=>{
    const {email, password} = req.body ;
    
    if(!email) return res.send(401).json({message : "email is required "})
    if(!password) return res.send(401).json({message : "password is required "})
    
   try{ 
        const user = await query(`selcet * from users where email like '${email}'`)
        if(!user) return res.send(404).json({message : "invalid email or password "});
    }
    catch(err){
        return res.status(500).json({message : err});
    }

    const matchPass = await bcrypt.compare(password, user[0].password);
    if(!matchPass) return res.send(404).json({message : "invalid email or password "})

    const token = generatejwt({id: user[0].id});

    return res.status(200).json({message:"Singin successfully" , token}) ;


}

module.exports = SignIn ; 