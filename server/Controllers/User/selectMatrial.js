const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 

const SelectMatrial = async(req , res)=>{
    const  orderId = req.body.id 
    const order = req.body.order ; 
    try{
        const found = (await query(`select * from orders where id = ${orderId} and confirmed = false `))[0];
        if(!found) return res.status(404).json({message : "order Not found "});

        try{
            await query(`update orders set list = '{${order}}' , confirmed = true where id  = ${orderId}`)

            await query(`update machine set state = 'on' where id = ${found.machine_id}`);

            return res.status(200).json({message : "order done"})
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