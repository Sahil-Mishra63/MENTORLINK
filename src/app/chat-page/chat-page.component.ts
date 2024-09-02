import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent implements OnInit{

    messageInput: string = '';
    message$: Observable<{ name: string; message: string}>;

    constructor(private chatService: ChatService) {
      this.message$ = this.chatService.getMessage();
    }

    ngOnInit(): void {
        const name = prompt("Enter your name to join");

       if(name) {
        this.chatService.joinChat(name);
       }
    }

    sendMessage(): void {
      if(this.messageInput.trim()) {
        this.chatService.sendMessage(this.messageInput);
        this.messageInput = ''; 
      }
    }

}
