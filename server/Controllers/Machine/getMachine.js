const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../config/data_base'); 

app.use(express.json());

const GetMachine = async(req , res)=>{
    const machineId = req.body; 
    try{
        const Machine = await query(`select * from machine where id = ${machineId}`);

        if(!Machine) return res.status(404).json({message : `Machine with id ${machineId}`});
        return res.status(200).json({message : Machine[0]});
    }
    catch(err){
        return res.status(500).json({message : err});
    }

}

module.exports = GetMachine ; 