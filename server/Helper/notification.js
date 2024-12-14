const {WebSocket} = require('ws')
const notification = new WebSocket.Server({ port: 8081 });

notification.on("connection" , client =>{
    client.on('message' , (mesg) =>{
      ID = +mesg 
      client.userID = ID 
      console.log(`user with id = ${mesg} have connected.`)
      // client.send("Data recieved!")
    });
})

module.exports = notification;