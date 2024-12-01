const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 

const DeleteMachine = async(req , res)=>{

    const MachineId = req.body ;
    
    try{
        await query (`DELETE FROM machine WHERE id = ${MachineId};`)
        const Machines = GetAllMachines(req , res);
        return res.status(200).json({message : "Deleted successfully" });
    
    }
    catch(err){
        return res.send(500).json({message : err});
    }
}
module.exports = DeleteMachine ; 