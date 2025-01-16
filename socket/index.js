
const { Server } = require("socket.io")
require("dotenv").config()


const PORT = process.env.PORT || 9000 
const io = new Server(PORT, {
    cors: { 
        origin: ["http://localhost:3000","http://localhost:8080"],
    }
})

let users = [];
const addUser = (userData, socketId) => {

    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId)
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}
// connecting to IO
io.on("connection", (socket) => {
    console.log("User Connection via Socket")
    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users)
    })

    // send message  
    socket.on("sendMessages", data => {
        const user = getUser(data.receiverId);
        console.log("USER :::::::::",user)
        console.log(data);
        io.to(user.socketId).emit("getMessage",data)

    })

      //disconnect
      socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})

