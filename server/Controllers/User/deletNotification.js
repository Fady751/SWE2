const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base');  

const DeleteNotifications= async(req , res)=>{
    
        const user = req.user ;

        try{
            const notifications = await query(`select * from notification where user_id = ${user.id}`)
            if(!notifications[0]) return res.status(200).json({message : "Done"})
            await query(`delete from notification where user_id = ${user.id}`)
            return res.status(200).json({Message: "deleted successfully"})
        }
        catch(err){
            return res.status(500).json({message : err})
        }


}

module.exports = DeleteNotifications 