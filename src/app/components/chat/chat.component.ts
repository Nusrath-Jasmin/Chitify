import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/userToken.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messagesSended: any[] = [];
  messagesReceived: any[] = [];
  currentMessage: string = '';
  userId!: string;
  chitOwnerId!: string;
  userType!: string;
  currentUser!:string

  constructor(private chatService: ChatService, private authService:AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userType = params['userType'];
      if(this.userType==='owner'){
        this.chitOwnerId = params['chitId'];
        this.userId=params['userId']
      }
      else if(this.userType==='user'){
        this.chitOwnerId=params['param1']
        this.userId=this.authService.getUserId();
      }
    });
    this.currentUser=this.userType==='owner'?this.chitOwnerId:this.userId;
    this.chatService.joinRoom(this.currentUser);
    this.chatService.getMessage().subscribe((message) => {
      console.log(message);
      if (message.senderId === this.currentUser) {
        this.messagesSended.push(message);
        console.log(this.messagesSended); 
      } else if (message.receiverId === this.currentUser) {
        this.messagesReceived.push(message);
        console.log(this.messagesReceived);
      }
    });
  }

  sendMessage() {
    if (this.currentMessage.trim() !== '') {
      // Determine the sender ID based on user type
      const senderId = this.userType === 'owner' ? this.chitOwnerId : this.userId;
      const receiverId = this.userType === 'owner' ?  this.userId : this.chitOwnerId;

      const message = {
        senderId: senderId,
        receiverId: receiverId,
        message: this.currentMessage
      };
      this.chatService.sendMessage(message);
      this.currentMessage = '';
    }
  }
}
