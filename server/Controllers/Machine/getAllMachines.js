const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 


const GetAllMachines = async(req , res)=>{
    
    try{
        const Machines = await query(`select * from machine`) ;
        
        if(!Machines) return res.status(404).json({message :"No machine has been added yet "});

        return res.status(404).json({message : Machines});
    }
    catch(err){
        return res.status(500).json({message : err});
    }
}
module.exports = GetAllMachines ;