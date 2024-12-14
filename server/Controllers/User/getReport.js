const express = require('express'); 
const { error, log } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 

const GetReport = async(req , res )=>{

    const MachineId =  req.body.id
    // check if it was already found in table last report 
    const Data = await query(`select
        orders.id AS id , orders.list AS materials , orders.confirmed AS status,machine.name AS machineName
        from machine join orders 
        on machine.id = orders.machine_id
        where machine.id = ${MachineId} and orders.maintained = false`);
    const materials = await query(`SELECT 
        materials.id AS id , materials.name as name, category.name as categoryname, category.recyclable as recyclable
        FROM materials JOIN category ON  
        materials.cat_id = category.id`);
        
        let recyclable = {}
        let Notrecyclable = {}
        Data.forEach((order) => {
            const list = [...order.materials]
            order.materials = []
            materials.forEach((material) => {
                const quantity = list.filter(num => num === material.id).length;
                if(quantity > 0) {
                    if(material.recyclable){
                        recyclable[material.name] = (recyclable[material.name] ? recyclable[material.name] :  0) + quantity;
                    }
                    else{
                        Notrecyclable[material.name] = (Notrecyclable[material.name] ?Notrecyclable[material.name] : 0) + quantity;
                    }
                }
            })
        });

    console.log(recyclable ,Notrecyclable )
    return res.status(200)

}

module.exports = GetReport
