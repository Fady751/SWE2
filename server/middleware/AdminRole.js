const express = require('express');
const { query ,  pool} = require('../config/data_base'); 
const CheckRole  = async(req , res , next )=>{
    
    const User = req.user ;
    if(User.role  != "Admin") res.status(400).josn({message : "Have no privilges"});

    next();   
}

module.exports = CheckRole ; 