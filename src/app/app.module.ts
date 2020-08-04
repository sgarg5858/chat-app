import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JoinChatComponent } from './join-chat/join-chat.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import { ChatComponent } from './chat/chat.component'
@NgModule({
  declarations: [
    AppComponent,
    JoinChatComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
