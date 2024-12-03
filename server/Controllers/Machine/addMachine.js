const express = require('express'); 
const { error, log } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 


const AddMachine = async(req , res)=>{
    const {name , latitude , longitude , state } = req.body;

    if(!name || !latitude || !longitude ) return res.status(401).json({message : "invalid data"});

    try{
        const checkName = (await query(`select * from machine where name = '${name}'`))[0];
        if(checkName) return res.status(401).json({message : "maachine with this name already found !"})

            try{
                const checklocation = await query(`select * from  machine where latitude = ${latitude} and longitude = ${longitude}`);
        
                if(checklocation[0]) return res.status(401).json({message : "location is busy right now"}); 
                
                if(state == null){
                    try{
                    await query(`insert into machine (name , latitude , longitude )
                    values('${name}' , ${latitude} , ${longitude})`);
                    }
                    catch(err){
                        return res.status(500).json({message : err });
                    }
                }
                else {
                    try{
                    await query(`insert into machine (name , latitude , longitude , state )
                        values('${name}' , ${latitude} , ${longitude} , '${state}')`);
                    }
                    catch(err){
                        return res.status(500).json({message : err });
                    }
                }
                return res.status(200).json({message : "Added successfully"});
            }
            catch(err){
                return res.status(500).json({message : err});
            }
    }
    catch(err){
        return res.status(500).json({message : err});
    }
    
}
module.exports = AddMachine ;