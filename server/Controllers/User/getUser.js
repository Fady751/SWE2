const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 


const GetUser = async(req, res)=>{
    // console.log(req.user);
    const user = req.user;
    const DataOwnerId = req.query.id? req.query.id: user.id;
    if(user.id == DataOwnerId || user.role == 'Admin'){
        try{
            const Data = await query(`select
                users.id AS id, users.name as name, users.email AS email ,
                users.role AS role , users.gender as gender , users.urlphoto AS urlphoto,
                orders.id AS OrderID , orders.list AS Order , orders.confirmed AS Confirmed  
                from users left join orders 
                on users.id = orders.user_id 
                where users.id = ${DataOwnerId}`);
            return res.status(200).json({message: "done", user: Data[0]});
        }
        catch(err){
            return res.status(500).json({message: err });
        }
    }
    else {
        return res.status(401).json({message : "Have no privileges!"})
    }
}

module.exports  = GetUser ;    