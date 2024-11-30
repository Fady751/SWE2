const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 

const GetAllMaterial = async(req , res) =>{

    try{
        const material = await query(`SELECT 
            materials.id, materials.name, category.name
            FROM materials JOIN category ON  
            materials.cat_id = category.id;`)
        if(!material) return res.status(404).json({message : "No Material has been found!"});
        else return res.status(200).json({message : material});
    }
    catch(err){
        return res.status(500).json({message : err });
    }

}

module.exports = GetAllMaterial ; 