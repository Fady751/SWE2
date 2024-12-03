const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base');  

const EditProfile = async(req , res)=>{
    const {name , email , photoUrl} = req.body ;
    const user = req.user ; 
   
    if(name) {
        try{
            await query(`update users set name = '${name}' WHERE id = ${user.id}`);
        }
        catch(err){
            return res.send(500).json({message : err});
        }
    }
    if(photoUrl) {
        try{
            await query(`UPDATE users SET urlPhoto = '${photoUrl}' WHERE id = ${user.id}`);
        }
        catch(err){
            return res.send(500).json({message : err});
        }
    }
    if(email) {
        try{
            const found = await query(`select name from users where email = '${email}'`);
            if(found) return res.status(401).json({message : "email is invalid"});

            try{
                await query(`UPDATE users SET email = '${email}' WHERE id = ${user.id}`);
            }
            catch(err){
                return res.send(500).json({message : err});
            }
        }
        catch(err){
            return res.send(500).json({message : err});
        }
    }
    const Updated_user = (await query(`select name , email , urlPhoto from users where id = ${user.id}`))[0];
    return res.status(200).json(Updated_user);

}
 
module.exports = EditProfile ; 