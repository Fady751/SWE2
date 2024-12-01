const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 

const GetAllNotifications = async (req , res)=>{
    const User = req.user; 
    try{
        const notifications = await query(`select 
            notification.id , notification.content , machine.name 
            from notification join on users 
            where 
            notification.user_id == users.id`);
        if(!notifications) return res.status(404).json({message : "No notification found !"});
        
        res.status(200).json({message : notifications});
    }
    catch(err){
        return res.status(500).json({message : err});
    }

}

module.exports = GetAllNotifications ; 