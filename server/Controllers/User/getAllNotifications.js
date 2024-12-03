const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 

const GetAllNotifications = async (req , res)=>{
    const user = req.user; 
    
    try{
        const notifications = await query(`select 
            notification.id AS NotificationId , notification.content AS Content , machine.name AS MachineName 
            from notification join machine on  
            notification.machine_id = machine.id
            where notification.user_id = ${user.id}`);
        if(!notifications) return res.status(404).json({message : "No notification found !"});
        
        res.status(200).json({message :"done" , result : notifications});
    }
    catch(err){
        return res.status(500).json({message : err});
    }

}

module.exports = GetAllNotifications ; 