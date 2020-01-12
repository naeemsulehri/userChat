import { Component, OnInit } from '@angular/core';
import { ServerDataHandlerService } from '../server-data-handler.service';


@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.scss']
})
export class ChatUIComponent implements OnInit {
  ngOnInit(): void {
    this.disPlayChat();
  }
  texts:any;

  constructor(private service:ServerDataHandlerService) { }

  disPlayChat(){
    this.service.textsMessage$.subscribe(text =>{
      this.texts=text;
      console.log(text);});
      console.log(this.texts);

    }
  }





