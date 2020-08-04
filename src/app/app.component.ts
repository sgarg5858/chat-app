import { Component, OnInit, ViewChild } from '@angular/core';
import{WebSocketService} from './web-socket.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'chat-app';
  
}
