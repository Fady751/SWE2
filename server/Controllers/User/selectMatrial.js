const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 

const SelectMatrial = async(req , res)=>{
    const user = req.user ;
    const  orderId = req.body.id ;
      
    console.log(orderId , order ) ;

    try{
        const found = await query(`select * from orders where id = ${id}`);
        if(!found) return res.status(404).json({message : "order Not found "});

        try{
            await query(`update orders set list = '${order}' , confirmed = '${true}' , state = 'on'`);
        }
        catch(err){
            return res.status(500).json({message : err })
        }
    }
    catch(err){
        return res.status(500).json({message : err }) 
    }
}

module.exports = SelectMatrial ;