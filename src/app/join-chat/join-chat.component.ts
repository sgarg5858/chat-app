import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-chat',
  templateUrl: './join-chat.component.html',
  styleUrls: ['./join-chat.component.css']
})
export class JoinChatComponent implements OnInit {

  constructor(private router:Router) { }
  
  joinForm:FormGroup;
  ngOnInit(): void {
    this.joinForm=new FormGroup({
      name:new FormControl('',Validators.required),
      room:new FormControl('',Validators.required)
    })
  }
  onJoin()
  {
    this.router.navigate(['chat',this.joinForm.value.name,this.joinForm.value.room]);
  }

}
