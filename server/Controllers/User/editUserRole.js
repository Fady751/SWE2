const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../config/data_base'); 

app.use(express.json());

const EditRole = async(req , res)=>{

    const NewRole = req.body ;
    const User = req.user ; 
    try{
        await query(`UPDATE users SET role = '${role}' WHERE id = ${User.Id}`);
        return res.status(200).json({message : "Updated successfully" , User });
    }
    catch(err){
        return res.status(500).json({message : err});
    }
} 
