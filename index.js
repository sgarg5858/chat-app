var app = require('express')();
var http = require('http');
var server=http.createServer(app);
var socketio = require('socket.io');
const { disconnect } = require('process');
const formatMessage = require('./utils/messages');
const {userJoin,getCurrentUser,userLeavesChat,getRoomUsers} =require('./utils/Users');
var io = socketio(server);

app.get('/',(req,res,next)=>{
    res.sendFile(__dirname + '/index.html');
})

io.on('connection',(socket)=>{
    
    console.log("New Connection");

    socket.on('joinRoom',({name,room})=>{
        const user=userJoin(socket.id,name,room);

        socket.join(user.room);
        //will run when any of the new connection happens;
    socket.emit('message',formatMessage('admin',`Hi ${name}, welcome to chatbox`));

    //Broadcast when user connects
    socket.broadcast.to(user.room).emit('message',formatMessage('admin',`${name} has joined the chat`));
    //send users and room  info

    io.to(user.room).emit('roomData',{
        room:user.room,
        users:getRoomUsers(user.room)
    })

    })

    
    //when disconnects
    socket.on('disconnect',()=>{
         const user=userLeavesChat(socket.id);
         if(user)
         {
        io.to(user.room).emit('message',formatMessage('admin',` ${user.name} has left the chat`));

        //when any of users left then we also do same thing
        io.to(user.room).emit('roomData',{
            room:user.room,
            users:getRoomUsers(user.room)
        })
         }
    })

    socket.on('chatMessage',(msg)=>{
        const user=getCurrentUser(socket.id);
       console.log(msg);
       io.to(user.room).emit('message',formatMessage(user.name,msg));
   })
})

server.listen(3000,()=>{
    console.log("Listening on 3000");
})