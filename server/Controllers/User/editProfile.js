const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base');  

const EditProfile = async(req , res)=>{
    const {name , email , photoUrl} = req.body ;
    const user = req.use ; 
    if(name) {
        try{
            await query(`UPDATE users SET name = '${name}' WHERE id = ${user.Id}`);
        }
        catch(err){
            return res.send(500).json({message : err});
        }
    }
    if(photoUrl) {
        try{
            await query(`UPDATE users SET urlPhoto = '${photoUrl}' WHERE id = ${user.Id}`);
        }
        catch(err){
            return res.send(500).json({message : err});
        }
    }
    if(email) {
        try{
            const found = await query(`select * from users where id = ${user.id}`);
            if(found) return res.status(401).json({message : "email is invalid"});
            try{
                await query(`UPDATE users SET email = '${email}' WHERE id = ${user.Id}`);
                return res.status(200).json({message : "Updated successfully"});
            }
            catch(err){
                return res.send(500).json({message : err});
            }
        }
        catch(err){
            return res.send(500).json({message : err});
        }
    }

}
 
module.exports = EditProfile ; 