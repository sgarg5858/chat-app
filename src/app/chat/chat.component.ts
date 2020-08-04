import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { WebSocketService } from '../web-socket.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnDestroy {

  messageForm:FormGroup;
  messagesSubscription:Subscription;
  messages:string[];
  name=null;
  room=null;
  roomData=null;
  users=[];
  roomDataSubscritpion:Subscription;
  constructor(private webSocketService:WebSocketService,private route:ActivatedRoute){}
  ngOnInit()
  {
    this.messageForm=new FormGroup({
      message:new FormControl('',Validators.required)
    })

    this.route.params.subscribe((params:Params)=>{
      console.log(params);
      this.name=params.name;
      this.room=params.room;
      this.webSocketService.setupSocketConnection();
      this.webSocketService.joinRoom(this.name,this.room);
    })

    this.messagesSubscription=this.webSocketService.messagesChanged.subscribe((messages)=>{
      console.log(messages);
      this.messages=messages;
    })
    this.roomDataSubscritpion=this.webSocketService.usersChanged.subscribe((roomData)=>{
      this.roomData=roomData;
      this.users=this.roomData.users;
    })
    
  }

  sendMessage() {
    this.webSocketService.sendMessage(this.messageForm.value.message);
    this.messageForm.reset();
    
 }
 currentDate()
 {
  return new Date();
 }
ngOnDestroy()
{

}
}
