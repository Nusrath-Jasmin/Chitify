import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) {}

  sendMessage(message: any) {
    this.socket.emit('message', message);
  }

  joinRoom(roomId: string) {
    this.socket.emit('joinRoom', roomId);
  }
  
  getMessage(): Observable<any> {
    console.log("fromevent",this.socket.fromEvent('message').subscribe());
    
    return this.socket.fromEvent('message');
  }
}
