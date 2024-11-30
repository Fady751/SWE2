const express = require('express');
const { query ,  pool} = require('../config/data_base'); 
const CheckRole  = async(req , res , next )=>{
    
    const User_id = req.user.id ;
    try{
        const user = await query (`select * from users where id = ${User_id} `);
        const Admin  = (user.role == "Admin");
        if(!Admin) return res.send(401).json({message: "Has no privileges "}) 
        next() ;
    }
    catch(err){
        return res.send(401).json({message : err });
    }
}

module.exports = CheckRole ; 