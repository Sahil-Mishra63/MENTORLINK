import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;
  private url = 'http://localhost:8000';

  constructor() { 
    this.socket = io(this.url);
  }

  sendMessage(message: string){
      this.socket.emit('send', message);
  }

  getMessage(): Observable<{ name: string; message: string}> {
    return new Observable<{ name: string; message: string }>((observer) => {
      this.socket.on('receive', (data: { name: string; message: string }) => {
        observer.next(data);
      });

      this.socket.on('user-joined', (name: string) => {
        observer.next({ name, message: `${name} joined the chat`});
      });

      this.socket.on('left', (name: string) => {
        observer.next({ name, message: `${name} left the chat`});
      });
    });
  }

  joinChat(name: string){
    this.socket.emit('new-user-joined', name);
  }
}
