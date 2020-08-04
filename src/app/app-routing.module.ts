import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { JoinChatComponent } from './join-chat/join-chat.component';


const routes: Routes = [
  {path:'chat/:name/:room',component:ChatComponent},
   {path:'',component:JoinChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
