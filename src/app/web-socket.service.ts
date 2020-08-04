import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { }
  socket:any;
  SOCKET_ENDPOINT = 'localhost:3000';
  messages:string[]=[];
  messagesChanged=new Subject<string[]>();
  roomData=null;
  usersChanged=new Subject<any>();
  setupSocketConnection()
  {
    this.socket = io(this.SOCKET_ENDPOINT);
    
    this.socket.on('message',(data:string)=>{
      console.log(data);
      this.messages.push(data);
      this.messagesChanged.next([...this.messages]);
    })
    this.socket.on('roomData',(roomData:any)=>{
      this.roomData=roomData;
      console.log(this.roomData);
      this.usersChanged.next(this.roomData);
    })
    
  }
  joinRoom(name,room)
  {
    this.socket.emit('joinRoom',{name,room});
  }
  sendMessage(message)
  {
    // console.log("emit")
  this.socket.emit('chatMessage',message);
  }
  leaves()
  {
    this.socket.emit('disconnect'); 
  }
}
