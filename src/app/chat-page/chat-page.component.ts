// import { Component, OnInit } from '@angular/core';
// import { ChatService } from '../chat.service';
// import { Observable } from 'rxjs';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-chat-page',
//   templateUrl: './chat-page.component.html',
//   styleUrl: './chat-page.component.scss'
// })
// export class ChatPageComponent implements OnInit{

//     messageInput: string = '';
//     message$:Observable<{ name: string; message: string}>;
//     // message$: Observable<message[]>;

//     constructor(private chatService: ChatService) {
//       this.message$ = this.chatService.getMessage();
//     }

//     ngOnInit(): void {
//         // if(typeof window !== 'undefined') {
//         //   const name = window.prompt("Enter your name to join");

//           const name = 'Anonymous';
//           if(name) {
//             this.chatService.joinChat(name);
//            }
//         // }
//         // else{
//         //   console.log("Prompt is not available in this environment");
//         // }

//     }

//     sendMessage(): void {
//       if(this.messageInput.trim()) {
//         this.chatService.sendMessage(this.messageInput);
//         this.messageInput = ''; 
//       }
//     }

// }

import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent implements OnInit{

  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchExternalData();
  }

  fetchExternalData(): void {
    this.http.get('http://127.0.0.1:3000')
      .subscribe(response => {
        this.data = response;
      }, error => {
        console.error('Error fetching data:', error);
      });
  }

}

