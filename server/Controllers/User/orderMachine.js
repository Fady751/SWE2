const express = require('express'); 
const { error } = require('console');
const bodyParser = require('body-parser');
const { query ,  pool} = require('../../config/data_base'); 
const {client} = require('pg')

const notification = new WebSocket.Server({ port: 8081 });

const OrderMachine = async(req , res )=>{
    const user = req.user ;
    const {latitude , longitude } = req.body;
    

}