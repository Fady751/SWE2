const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../config/data_base'); 

app.use(express.json());

const AddMachine = async(req , res)=>{
    const {name , latitude , longitude , state } = req.body;
    try{
        const checklocation = await query(`select * machine where latiude = ${latitude} and longitude = ${longitude}`);
        
        if(checklocation) return res.state(401).json({message : "location is busy right now"}); 
        
        if(!state)
            await query(`insert into machine (name , latitude , longitude )
            values
            '${name}' , ${latitude} , ${longitude}`);
        
        else await query(`insert into machine (name , latitude , longitude , state )
            values
            '${name}' , ${latitude} , ${longitude} , ${state}`);
        return res.state(200).json({message : "Added successfully"});
    }
    catch(err){
        return res.status(500).json({message : err});
    }
}
module.exports = AddMachine ;