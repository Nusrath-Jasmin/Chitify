import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private webSocketSubject!: WebSocketSubject<any>;
  private messagesSubject: Subject<any> = new Subject<any>();

  constructor() {}

  connect(): void {
    // Replace 'ws://localhost:8080' with your WebSocket server URL
    this.webSocketSubject = webSocket('ws://16.171.31.17');

    this.webSocketSubject.subscribe(
      message => this.messagesSubject.next(message),
      error => console.error('WebSocket error:', error)
    );
  }

  listen(): Observable<any> {
    return this.messagesSubject.asObservable();
  }
}
